# @techgatelabs/royalgate-shared

Single source of truth for cross-app types on the RoyalGate Supplies platform —
consumed by buyer-web, admin-web, buyer-mobile, and agent-mobile. **Vendoring is
not allowed**; always import from this package.

## Modules

| Export | What |
|---|---|
| `./enums` | Shared enums (order status, account types, payment, roles, …) |
| `./dto` | Hand-authored DTOs / shared shapes |
| `./events` | Realtime (Socket.IO) event type definitions |
| `./geography` | Zone / LGA / state helpers |
| `./helpers` | Utility functions |
| `./api` | **Generated** OpenAPI types + accessors (see below) |

## Generated API types (`./api`)

`src/api-types.ts` is **generated** from the backend's OpenAPI spec — do not edit
it by hand. It exposes the full contract; `src/api.ts` re-exports ergonomic
accessors:

```ts
import type { Schemas, ApiEnvelope } from '@techgatelabs/royalgate-shared';

type CheckoutState = Schemas['CheckoutStateResponseDto'];
type WalletSummary = Schemas['WalletSummaryResponseDto'];
```

`ApiEnvelope<T>` / `ApiErrorResponse` document the `{ success, message, data }` /
`{ success, message, errors, code }` wire shapes (apps unwrap `.data` in their
Axios client).

### Regenerating after a backend API change

```bash
# refresh the spec from the backend, then regenerate + bump
cp ../royalgate-supplies-backend/docs/api/openapi.json openapi.json
npm run codegen          # openapi-typescript openapi.json -> src/api-types.ts
npm run typecheck        # verify it compiles
# bump the minor version in package.json, commit, tag vX.Y.0, push the tag
```

Apps pin to a git tag (e.g. `github:TechGateLabs/royalgate-supplies-shared#v1.1.0`),
so a new contract = bump + tag + update each app's dependency.

## Build

```bash
npm run build      # tsc -> dist/
npm run typecheck
```
