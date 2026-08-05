/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * Chat
 * ============================================================
 */

import { AIProviderId } from "./provider";

export interface ChatRequest {

  provider: AIProviderId;

  model: string;

  prompt: string;

}

export interface ChatResponse {

  provider: AIProviderId;

  model: string;

  text: string;

}