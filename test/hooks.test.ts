import { createEvent } from "../lib/hooks/event.hooks";

it("createEvent should create an event service", () => {
  const event = "test";
  const eventService = createEvent<number>(event);
  expect("addListener" in eventService).toBe(true);
  expect("publish" in eventService).toBe(true);
});

it("createEvent should create addListener function", () => {
  const event = "test";
  const eventService = createEvent<number>(event);
  const addListener = eventService.addListener;
  expect(typeof addListener).toBe("function");
});
it("createEvent should create publish function", () => {
  const event = "test";
  const eventService = createEvent<number>(event);
  const publish = eventService.publish;
  expect(typeof publish).toBe("function");
});

it("createEvent should create an event service with a listener", () => {
  const event = "test";
  let res = 0;
  const listener = (arg: number): void => {
    res = arg;
  };
  const eventService = createEvent<number>(event);
  eventService.addListener(listener);
  eventService.publish(1);
  expect(res).toBe(1);
});
