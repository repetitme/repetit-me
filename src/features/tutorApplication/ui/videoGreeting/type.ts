export interface VideoData {
  file: File;
  url: string;
}

export interface VideoGreetingProps {
  onVideoChange: (video: VideoData | null) => void;
  initialVideo?: { file: File; url: string } | null;
}
