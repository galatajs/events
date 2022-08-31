import { createEventListener } from "../listener/event.listener";
import { createEventPublisher } from "../publisher/event.publisher";
import { EventEmitter } from "events";
import { CreateEventOptions, EventService } from "../types/event.types";

export const DefaultOptions: CreateEventOptions = {
  maxListeners: 1000,
};

/**
 * Create an event service.
 * @author Sami Salih İbrahimbaş
 * @since 0.0.1
 * */
export const createEvent = <T>(
  event: string,
  options: CreateEventOptions = DefaultOptions
): EventService<T> => {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(options.maxListeners);
  return {
    addListener: createEventListener<T>(emitter, event),
    publish: createEventPublisher<T>(emitter, event),
  };
};
