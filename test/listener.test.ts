import { createEventListener } from "../lib/listener/event.listener";
import { EventEmitter } from "events";

it("createEventListener function should be defined", () => {
  expect(createEventListener).toBeDefined();
});

it("createEventListener function should return a function", () => {
  const emitter = new EventEmitter();
  const listener = createEventListener(emitter, "test");
  expect(typeof listener).toBe("function");
});

it("createEventListener function should return a function that calls the listener", () => {
  let res = 0;
  const callback = (arg: number): void => {
    res = arg;
  };
  const emitter = new EventEmitter();
  const listener = createEventListener<number>(emitter, "test");
  listener(callback);
  emitter.emit("test", 1);
  expect(res).toBe(1);
});
