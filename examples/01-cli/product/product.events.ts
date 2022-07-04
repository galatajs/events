import { createEvent } from "../../../dist"; // for you, @istanbul/events
import { Product } from "./product.entity";

export const onProductCreated = createEvent<Product>("productCreated");
