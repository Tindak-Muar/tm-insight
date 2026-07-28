import { NextResponse } from "next/server";

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export function success<T>(
  data: T,
  message = "Berjaya",
  status = 200
) {
  return NextResponse.json<ApiSuccessResponse<T>>(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    }
  );
}

export function failure(
  message = "Ralat",
  status = 500,
  errors?: unknown
) {
  return NextResponse.json<ApiErrorResponse>(
    {
      success: false,
      message,
      errors,
    },
    {
      status,
    }
  );
}

/**
 * Alias untuk backward compatibility
 */
export const successResponse = success;
export const errorResponse = failure;