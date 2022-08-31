import { ListenerCreator } from "../listener/event.listener";
import { EventPublisher } from "../publisher/event.publisher";

export type CreateEventOptions = {
  /**
   * @author Sami Salih İbrahimbaş
   * @since 0.0.6
   * */
  maxListeners: number;
};

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
