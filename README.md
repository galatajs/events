<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@istanbul/events</h3>
<p align="center">
  Lifecycle for your schemas at any scale.
</p>

### What Is It?

Server Side Event Package. Do you want to do something in customer service when there is a record in the product table? That's called lifecycle and ``@istanbul/events`` provides it.

You don't have to use ``istanbul`` framework, `@istanbul/events` is a nodejs package.

🔗 [access on npm](https://www.npmjs.com/package/@istanbul/events)

### Installation

```sh
npm install @istanbul/events
```

> or with yarn
>
> ```
> yarn add @istanbul/events
> ```


### Example

Take a look at the example folder for example usage!

### Basic Usage

```typescript

import { createEvent } from "@istanbul/events";

let totalPrice = 0;

const callback = (price : number) : void => {
    totalPrice += price;
}

const onProductAddEvent = createEvent<number>("product-add");

onProductAddEvent.addListener(callback);
onProductAddEvent.publish(10);
onProductAddEvent.publish(20);

console.log(totalPrice); // 30
```

Although this explains the usage, the purpose of the package is more than that, please review the example folder for better usage.
