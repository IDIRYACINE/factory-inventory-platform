/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.3.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as helpers_isAuthenticated from "../helpers/isAuthenticated";
import type * as helpers_statusCodes from "../helpers/statusCodes";
import type * as helpers_updateHelpers from "../helpers/updateHelpers";
import type * as inventory from "../inventory";
import type * as productFamily from "../productFamily";
import type * as session from "../session";
import type * as stock from "../stock";
import type * as workers from "../workers";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "helpers/isAuthenticated": typeof helpers_isAuthenticated;
  "helpers/statusCodes": typeof helpers_statusCodes;
  "helpers/updateHelpers": typeof helpers_updateHelpers;
  inventory: typeof inventory;
  productFamily: typeof productFamily;
  session: typeof session;
  stock: typeof stock;
  workers: typeof workers;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
