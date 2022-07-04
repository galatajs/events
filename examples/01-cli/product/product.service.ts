import { Product } from "./product.entity";
import { onProductCreated } from "./product.events";

export const createProduct = (name: string): Product => {
  const product = new Product(name, 0);
  console.log("event publishing...");
  onProductCreated.publish(product);
  console.log("event published");
  return product;
};
