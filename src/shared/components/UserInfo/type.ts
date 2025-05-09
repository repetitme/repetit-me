export interface IUserInfo {
  data: {
    name: string;
    subjects: string[];
    studentAudience: string[];
    purpose: string[];
  };
  children: React.ReactNode;
  isCard: boolean;
}
