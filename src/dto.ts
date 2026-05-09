import type {
  AccountType,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  ProductCategory,
  ProductStatus,
  UserRole,
  UserStatus,
} from './enums';

export interface BuyerSummary {
  id: string;
  phone: string;
  email: string | null;
  full_name: string;
  status: UserStatus;
  account_type: AccountType;
  bvn_verified: boolean;
  nin_verified: boolean;
  pod_eligible: boolean;
  approved_at: string | null;
}

export interface ProductSummary {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string | null;
  unit_size: string;
  price_kobo: number | string;
  stock_qty: number;
  min_order_qty: number;
  low_stock_threshold: number;
  restricted_to?: string[] | null;
  status: ProductStatus;
  photo_url?: string | null;
}

export interface OrderItemSummary {
  id: string;
  product_id: string;
  product_name: string;
  unit_price_kobo: number | string;
  quantity: number;
  unit_size: string | null;
  line_total_kobo: number | string;
}

export interface OrderSummary {
  id: string;
  order_ref: string;
  buyer_id: string;
  status: OrderStatus;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  subtotal_kobo: string;
  delivery_fee_kobo: string;
  total_kobo: string;
  agent_id: string | null;
  created_at: string;
  delivered_at: string | null;
  cancelled_at: string | null;
  pod_photo_url?: string | null;
  pod_captured_at?: string | null;
  items: OrderItemSummary[];
}

export interface PaginatedResponse<T> {
  page: number;
  limit: number;
  total: number;
  items: T[];
}

export interface AuthUser {
  id: string;
  phone: string;
  email?: string | null;
  role: UserRole;
  status: UserStatus;
  account_type?: AccountType;
}
