/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * AI Core
 * ============================================================
 */

import {
  ProviderResolver,
  RequestDispatcher,
  ResponseMapper,
} from "./gateway";

import {
  ChatRequest,
  ChatResponse,
} from "./types/chat";

import {
  integration,
} from "../integration";

export class AICore {

  readonly name = "SINAR AI Core";

  readonly version = "1.0.0";

  private readonly providerResolver =
    new ProviderResolver();

  private readonly dispatcher =
    new RequestDispatcher();

  private readonly mapper =
    new ResponseMapper();

  /**
   * Chat.
   */
  async chat(
    request: ChatRequest
  ): Promise<ChatResponse> {

    const provider =
      this.providerResolver.resolve(
        request.provider
      );

    const dispatchedRequest =
      await this.dispatcher.dispatch({
        ...request,
        provider,
      });

    /**
     * Sprint 4:
     * Placeholder response.
     *
     * Sprint 4.2:
     * Akan dihantar kepada Gerbang Integrasi.
     */
    const response: ChatResponse = {
      provider,
      model: dispatchedRequest.model,
      text: "SINAR AI Core placeholder response.",
    };

    return this.mapper.map(response);

  }

}