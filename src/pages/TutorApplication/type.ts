import { ProfileFormData } from '../../features/TutorApplication/ui/profileInfo/type';
import { Subject } from '../../features/TutorApplication/ui/subjectForm/type'

export interface TutorApplicationData {
  profileInfo: ProfileFormData;
  subjects: Subject[];
  // diplomas: Diploma[];
  // videos: { url: string };
  // schedule: { days: string[] };
}
