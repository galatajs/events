import { EventEmitter } from "events";

/**
 * Event listener function type.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export type EventListener<T> = (data: T) => void;

/**
 * Event listener creator function type.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export type ListenerCreator<T> = (listener: EventListener<T>) => void;

const listenEvent = <T>(
  emitter: EventEmitter,
  event: string,
  listener: (...args: any[]) => void
): void => {
  emitter.on(event, listener);
};

/**
 * Creates an event listener.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export const createEventListener = <T>(
  emitter: EventEmitter,
  key: string
): ListenerCreator<T> => {
  return (listener: EventListener<T>): void => {
    listenEvent(emitter, key, listener);
  };
};
