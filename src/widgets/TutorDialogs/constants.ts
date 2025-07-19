import { arrangement, button, hadFirstClass, report } from './data';
import { TState, formData } from './types';

export enum TutorDialogsVariant {
  arrangement = 'arrangement',
  hadFirstClass = 'hadFirstClass',
  report = 'report'
}

export const initialState: TState = {
  arrangement: {
    title: arrangement.mainTitles[0],
    button: button[0],
    step: 1
  },
  hadFirstClass: {
    title: hadFirstClass.mainTitles[0],
    button: button[0],
    step: 1
  },
  report: {
    title: report.mainTitles[0],
    button: button[3]
  }
};

export const initialValues: formData = {
  arrangement: {
    arranged: 'Да',
    cause: '',
    price: '',
    date: '',
    time: ''
  },
  hadFirstClass: {
    hadClass: 'Да',
    cause: '',
    futurePlan: ''
  },
  report: {
    price: '',
    duration: '',
    planedNumberOfLessons: '',
    additionalInfo: ''
  }
};
