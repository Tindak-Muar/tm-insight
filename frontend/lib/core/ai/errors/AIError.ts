/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * AI Error
 * ============================================================
 */

export class AIError extends Error {

  constructor(message: string) {

    super(message);

    this.name = "AIError";

  }

}