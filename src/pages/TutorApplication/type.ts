import { Diploma } from '../../features/tutorApplication/ui/diplomasUpload/ type'
import { ProfileFormData } from '../../features/tutorApplication/ui/ProfileInfo/type';
import { Subject } from '../../features/tutorApplication/ui/subjectForm/type';

export default interface TutorApplicationData {
  profileInfo: ProfileFormData;
  subjects: Subject[];
  diplomas: Diploma[];
  videos: { url: string };
  // schedule: { days: string[] };
}
