import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import useRequest from "../../hooks/use-request";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: (payment) => console.log(payment)
  })

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    }

    // for the first time
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div> Order Expired </div>;
  }

  return <div> 
    {timeLeft} seconds left until order expires
    <StripeCheckout 
      token={({ id }) => doRequest({ token: id })}
      stripeKey="pk_test_51J6uhKSHejX4kybWxveauEILvqIph5cgAE8tzqBKAMH5oqQnAyG4WcweAzcfgGeXcApAsplLa0XezPL2CWgxOKaI0013WoPZk5"
      amount={order.ticket.price * 100}
      email={currentUser.email}
    />
    {errors}
  </div>;
}

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
}

export default OrderShow;