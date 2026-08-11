import { API_BASE_URL } from "../config/api";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        Accept: "application/json",
        ...options?.headers,
      },
    },
  );

  let result: ApiResponse<T>;

  try {
    result = await response.json();
  } catch {
    throw new Error(
      "The server returned an invalid response.",
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        "The request could not be completed.",
    );
  }

  if (result.data === undefined) {
    throw new Error(
      "The server returned no data.",
    );
  }

  return result.data;
}

export { apiRequest };