export type TSchedule = Record<string, Record<string, boolean>>;

export type TOnChange = {
  onChange: (freeTime: Record<string, string[]>) => void;
};

export interface TUseSchedule {
  schedule: TSchedule;
  time: string[];
  pressedMouse: boolean;
  active: string[];
  handleMouse: (pressed: boolean) => void;
  handleActive: (day: string, time: string) => void;
  handleChange: (day: string, time: string) => void;
}
