import { Ticket } from "../ticket";

it('implements optimistic concurrency control', async (done) => {
  // create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123'
  });

  // save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const ticket1 = await Ticket.findById(ticket.id);
  const ticket2 = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  ticket1!.set({
    price: 10
  });

  ticket2!.set({
    price: 15
  });

  // save the first fetched ticket
  await ticket1!.save();

  // save the second fetched ticket and expect some error
  try {
    await ticket2!.save();
  } catch(err) {
    // return done();
    return;
  }

  throw new Error('Should not reach this point');
});