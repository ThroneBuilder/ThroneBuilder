/**
 * Extracts a YouTube video ID from common URL formats.
 * Supported: watch?v=, youtu.be/, /shorts/
 * Returns null for unrecognized formats — callers should skip the embed.
 */
export function extractYoutubeId(url: string): string | null {
  const patterns = [
    /[?&]v=([^&#]+)/,        // https://www.youtube.com/watch?v=VIDEO_ID
    /youtu\.be\/([^?&#/]+)/, // https://youtu.be/VIDEO_ID
    /\/shorts\/([^?&#/]+)/,  // https://www.youtube.com/shorts/VIDEO_ID
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}
