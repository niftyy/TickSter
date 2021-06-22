import { Publisher, Subjects, TicketCreatedEvent } from "@tickster/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}