import { apiRequest } from "./api";
import type {
  LoanProduct,
  SiteAbout,
  SiteContact,
  SiteIdentity,
} from "../types/site.types";

export const siteContentService = {
  getIdentity() {
    return apiRequest<SiteIdentity>(
      "/site/identity",
    );
  },

  getAbout() {
    return apiRequest<SiteAbout>(
      "/site/about",
    );
  },

  getContact() {
    return apiRequest<SiteContact>(
      "/site/contact",
    );
  },

  getLoanProducts() {
    return apiRequest<LoanProduct[]>(
      "/site/loan-products",
    );
  },
};