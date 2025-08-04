export interface IPreviousLessons {
  lessonsListPaid: lessonsListPaidType[];
  lessonsListUnpaid: lessonsListUnpaidType[];
}

export type lessonsListPaidType = {
  lessonNumber: number;
  lessonPrice: number;
  lessonData: string;
  lessonTime: string;
};

export type lessonsListUnpaidType = {
  lessonNumber: number;
  lessonPrice: number;
  lessonData: string;
  lessonTime: string;
  lessonDebt: number;
};
