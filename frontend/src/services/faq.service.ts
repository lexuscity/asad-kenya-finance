import { apiRequest } from "./api";
import type { FaqItem } from "../types/site.types";

export const faqService = {
  async getAll(): Promise<FaqItem[]> {
    return apiRequest<FaqItem[]>("/faq");
  },
};