import { mediaContent } from "../data/media-content.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Media Service
 * ============================================================
 */

export class MediaService {
  /**
   * Returns active homepage media in display order.
   */
  getHomepageMedia() {
    return mediaContent
      .filter((media) => media.active)
      .sort((a, b) => a.order - b.order);
  }

  /**
   * Returns one active media item.
   */
  getById(id: string) {
    return mediaContent.find(
      (media) =>
        media.id === id && media.active,
    );
  }
}

export const mediaService = new MediaService();