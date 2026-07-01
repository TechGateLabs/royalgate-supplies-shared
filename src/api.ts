/**
 * Generated OpenAPI types + ergonomic accessors.
 *
 * `api-types.ts` is generated from the backend's `docs/api/openapi.json` via
 * `npm run codegen` — do not edit it by hand. Regenerate after a backend API
 * change so the frontends stay in lockstep with the contract.
 *
 * Usage in an app:
 *   import type { Schemas, ApiPaths } from '@techgatelabs/royalgate-shared';
 *   type CheckoutState = Schemas['CheckoutStateResponseDto'];
 */
import type { paths, components, operations } from './api-types';

export type ApiPaths = paths;
export type ApiOperations = operations;
export type ApiComponents = components;

/** All response/request DTO schemas, keyed by class name. */
export type Schemas = components['schemas'];

/**
 * The standard success envelope the API wraps every 2xx in
 * (`{ success, message, data }`). Apps unwrap `.data` in their Axios client;
 * this type documents the wire shape.
 */
export interface ApiEnvelope<T> {
  success: true;
  message: string;
  data: T;
}

/** The standard error envelope from the global exception filter. */
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors: string[];
  code: string;
}
