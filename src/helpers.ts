import { OrderStatus } from './enums';

/**
 * Derived helpers that only make sense on the client side (filtering
 * the orders list, etc.). Backend has its own equivalents tied to its
 * service layer. Kept separate from enums.ts because that file is
 * auto-synced from the backend's canonical copy.
 */

export const ACTIVE_ORDER_STATUSES: OrderStatus[] = [
  OrderStatus.PENDING_PAYMENT,
  OrderStatus.CONFIRMED,
  OrderStatus.PROCESSING,
  OrderStatus.DISPATCHED,
  OrderStatus.OUT_FOR_DELIVERY,
];

export const HISTORY_ORDER_STATUSES: OrderStatus[] = [
  OrderStatus.DELIVERED,
  OrderStatus.FAILED,
  OrderStatus.CANCELLED,
];
