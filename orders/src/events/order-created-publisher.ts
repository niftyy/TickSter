import { Publisher, OrderCreatedEvent, Subjects } from "@tickster/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
