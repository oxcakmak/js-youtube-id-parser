// Define a function to parse YouTube video ID from a URL
export function parseYouTubeURL(url: string): string | null {
  // Regular expression for matching YouTube URLs
  const pattern =
    /^((?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\-_\w]{11})(?:.+)?$/;

  // Match the URL against the regular expression
  const match = url.match(pattern);

  // Return the video ID if found, otherwise null
  return match ? match[2] : null;
}
