import { lessonsListPaidType, lessonsListUnpaidType } from "./type";

export const lessonsListPaidData: lessonsListPaidType[] = [
    {
        lessonNumber: 1,
        lessonPrice: 2000,
        lessonData: '20.03.2023',
        lessonTime: '10:13'
    },
    {
        lessonNumber: 2,
        lessonPrice: 2000,
        lessonData: '20.03.2023',
        lessonTime: '10:13'
    }
]

export const lessonsListUnpaidData: lessonsListUnpaidType[] = [
    {
        lessonNumber: 3,
        lessonPrice: 2000,
        lessonData: '20.03.2023',
        lessonTime: '10:13',
        lessonDebt: 430
    }
]