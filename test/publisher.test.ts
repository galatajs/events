import { createEventPublisher } from "../lib/publisher/event.publisher";
import { EventEmitter } from "events";

it("createEventPublisher should return a function", () => {
  const emitter = new EventEmitter();
  const publisher = createEventPublisher(emitter, "test");
  expect(publisher).toBeInstanceOf(Function);
});

it("createEventPublisher should return a function that calls the listener", () => {
  let res = 0;
  const callback = (arg: number): void => {
    res = arg;
  };
  const emitter = new EventEmitter();
  emitter.on("test", callback);
  const publisher = createEventPublisher<number>(emitter, "test");
  publisher(1);
  expect(res).toBe(1);
});
