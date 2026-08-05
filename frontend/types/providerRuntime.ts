/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Domain:
 * Runtime Penyedia
 * ============================================================
 */

import {
  ApiHealthStatus,
  ConnectionStatus,
} from "./provider";

export interface ProviderRuntime {

  connectionStatus: ConnectionStatus;

  apiHealth: ApiHealthStatus;

  lastTestedAt?: Date;

  responseTime?: number;

}