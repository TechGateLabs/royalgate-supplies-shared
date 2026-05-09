import type { OrderStatus, PaymentStatus } from './enums';

/** Emitted over Socket.IO when an order transitions state. */
export interface OrderStatusEvent {
  order_id: string;
  order_ref: string;
  status: OrderStatus;
  previous_status?: OrderStatus;
  buyer_id: string;
  agent_id: string | null;
  at: string;
}

/** Emitted over Socket.IO when an agent pushes a GPS fix. */
export interface AgentLocationEvent {
  agent_id: string;
  order_id?: string;
  lat: number;
  lng: number;
  at: string;
}

/** Emitted when an order's payment status changes (e.g. POD bank transfer confirmed by admin). */
export interface PaymentStatusEvent {
  order_id: string;
  order_ref: string;
  payment_status: PaymentStatus;
  buyer_id: string;
  agent_id: string | null;
  confirmed_at: string | null;
  at: string;
}

/** Emitted when an admin assigns (or reassigns) a delivery to an agent. */
export interface DeliveryAssignedEvent {
  order_id: string;
  order_ref: string;
  agent_id: string;
  previous_agent_id: string | null;
  buyer_id: string;
  at: string;
}
