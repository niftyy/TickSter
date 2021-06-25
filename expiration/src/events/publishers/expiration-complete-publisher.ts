import { Subjects, Publisher, ExpirationCompleteEvent } from "@tickster/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
};