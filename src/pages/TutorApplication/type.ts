import { ProfileFormData } from '../../features/tutorApplication/ui/ProfileInfo/type';
import { Diploma } from '../../features/tutorApplication/ui/diplomasUpload/type';
import { Subject } from '../../features/tutorApplication/ui/subjectForm/type';
import { VideoData } from '../../features/tutorApplication/ui/videoGreeting/type';

export default interface TutorApplicationData {
  profileInfo: ProfileFormData;
  subjects: Subject[];
  diplomas: Diploma[];
  video: VideoData | null;
  schedule: Record<string, string[]>;
}

export type TutorField = keyof TutorApplicationData;
