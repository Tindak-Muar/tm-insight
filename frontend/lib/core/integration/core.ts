/**
 * ============================================================
 * TM Insight
 * Integration Core
 * ============================================================
 */

import {
  IntegrationRequest,
} from "./types/request";

import {
  IntegrationResponse,
} from "./types/response";

import {
  getAdapter,
} from "@/lib/gerbang-integrasi/adapters/adapterRegistry";

import {
  ConnectionTestRequest,
} from "@/types/connection";

export class IntegrationCore {

  readonly name = "Integration Core";

  readonly version = "1.0.0";

  /**
   * Invoke provider.
   */
  async invoke(
    request: IntegrationRequest
  ): Promise<IntegrationResponse> {

    const adapter =
      getAdapter(request.providerId);

    if (!adapter) {

      return {

        success: false,

        message:
          `Adapter '${request.providerId}' tidak ditemui.`,

      };

    }

    switch (request.operation) {

      case "testConnection": {

        const result =
          await adapter.testConnection(
            request.payload as ConnectionTestRequest
          );

        return {

          success: result.success,

          data: result,

          message: result.message,

        };

      }

      default:

        return {

          success: false,

          message:
            `Operasi '${request.operation}' tidak disokong.`,

        };

    }

  }

}