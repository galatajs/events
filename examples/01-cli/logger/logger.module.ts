import { onProductCreated } from "../product/product.events";
import { logAnything } from "./logger.service";

onProductCreated.addListener(logAnything);
