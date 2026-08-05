/**
 * ============================================================
 * TM Insight
 * Integration Core
 *
 * Error
 * ============================================================
 */

export class IntegrationError extends Error {

  constructor(
    message: string
  ) {

    super(message);

    this.name = "IntegrationError";

  }

}