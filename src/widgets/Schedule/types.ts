export type TSchedule = Record<string, Record<string, boolean>>;

export type TOnChange = {
  onChange: (schedule: Record<string, string[]>) => void;
};

export interface TUseSchedule {
  schedule: TSchedule;
  time: string[];
  handleChange: (day: string, time: string) => void;
}
