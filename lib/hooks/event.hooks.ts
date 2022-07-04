import {
  createEventListener,
  ListenerCreator,
} from "../listener/event.listener";
import {
  createEventPublisher,
  EventPublisher,
} from "../publisher/event.publisher";
import { EventEmitter } from "events";

/**
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export type EventService<T> = {
  /**
   * Listen to an event.
   * @author Sami Salih İbrahimbaş
   * @since 0.0.1
   * */
  addListener: ListenerCreator<T>;

  /**
   * Publish event to listeners.
   * @author Sami Salih İbrahimbaş
   * @since 0.0.1
   * */
  publish: EventPublisher<T>;
};

/**
 * Create an event service.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export const createEvent = <T>(event: string): EventService<T> => {
  const emitter = new EventEmitter();
  return {
    addListener: createEventListener<T>(emitter, event),
    publish: createEventPublisher<T>(emitter, event),
  };
};
