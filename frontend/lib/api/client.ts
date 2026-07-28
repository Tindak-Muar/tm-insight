// ============================================================================
// SINAR - API Client
// lib/api/client.ts
// ============================================================================

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export type ApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiErrorResponse;

async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
    });

    // Elakkan crash jika server tidak memulangkan JSON
    const json = await response
      .json()
      .catch(() => null);

    // Pulangkan ApiErrorResponse jika HTTP error
    if (!response.ok) {
      return (
        json ?? {
          success: false,
          message: `Request failed with status ${response.status}`,
        }
      ) as ApiResponse<T>;
    }

    // Jika response berjaya tetapi format tidak sah
    if (!json) {
      return {
        success: false,
        message:
          "Server tidak memulangkan data yang sah.",
      };
    }

    return json as ApiResponse<T>;
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Ralat rangkaian.",
    };
  }
}

export const api = {
  get<T>(url: string) {
    return request<T>(url);
  },

  post<T>(
    url: string,
    body?: unknown
  ) {
    return request<T>(url, {
      method: "POST",
      body:
        body !== undefined
          ? JSON.stringify(body)
          : undefined,
    });
  },

  put<T>(
    url: string,
    body?: unknown
  ) {
    return request<T>(url, {
      method: "PUT",
      body:
        body !== undefined
          ? JSON.stringify(body)
          : undefined,
    });
  },

  patch<T>(
    url: string,
    body?: unknown
  ) {
    return request<T>(url, {
      method: "PATCH",
      body:
        body !== undefined
          ? JSON.stringify(body)
          : undefined,
    });
  },

  delete<T>(url: string) {
    return request<T>(url, {
      method: "DELETE",
    });
  },
};

export default api;