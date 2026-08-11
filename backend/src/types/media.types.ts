/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Media Types
 * ============================================================
 */

export interface SiteMedia {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  order: number;
  active: boolean;
}