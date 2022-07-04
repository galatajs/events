import { EventEmitter } from "events";

/**
 * Creates an event publisher function type.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export type EventPublisher<T> = (data: T) => void;

const publishEvent = <T>(
  emitter: EventEmitter,
  event: string,
  data: T
): void => {
  emitter.emit(event, data);
};

/**
 * Creates an event publisher.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export const createEventPublisher = <T>(
  emitter: EventEmitter,
  key: string
): EventPublisher<T> => {
  return (data: T): void => {
    publishEvent(emitter, key, data);
  };
};
