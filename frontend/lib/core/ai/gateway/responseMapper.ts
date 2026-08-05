/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * Response Mapper
 * ============================================================
 */

import { ChatResponse } from "../types/chat";

/**
 * Menyeragamkan semua response AI.
 *
 * Semua provider akan menghasilkan
 * ChatResponse yang sama.
 */
export class ResponseMapper {

  map(
    response: ChatResponse
  ): ChatResponse {

    return response;

  }

}