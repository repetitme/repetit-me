import { useState } from 'react';

import { formatNumber } from '../../../shared/ui/input';
import {
  accordionGroups,
  defaultState,
  errorMessages,
  titles
} from './constants';

import { TUseTutorFilters } from '../types';

const useTutorFilters = ({ onSubmit }: TUseTutorFilters) => {
  const [values, setState] = useState(defaultState);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState<boolean[]>(
    accordionGroups.map(() => false)
  );
  const resetIsActive = JSON.stringify(values) !== JSON.stringify(defaultState);
  const toggleAccordion = (index: number): void => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { type, name, value, checked } = e.target;
    if (type === 'radio') {
      setState((prevState) => ({ ...prevState, [name]: [value] }));
      return;
    }
    const newValue = checked
      ? [...(values[name] || []), value]
      : values[name].filter((item: string) => item !== value);
    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const applyPriceRule = (value: string, index: number): void => {
    const toNumber = (string: string) => Number(string.replace(/\D/g, ''));
    const min = values[titles.price][0];
    const max = values[titles.price][1];
    const price = toNumber(value);
    let errorMessage = '';
    if (index === 0 && price > toNumber(max)) {
      errorMessage = errorMessages.min;
    }
    if (index === 1 && price < toNumber(min)) {
      errorMessage = errorMessages.max;
    }
    if (min.length < 3 || max.length < 3) {
      errorMessage = errorMessages.required;
    }
    setErrorMessage(errorMessage);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    let value = e.target.value;
    applyPriceRule(e.target.value, index);
    if (!value) {
      value = '0 ₽';
    }
    value = value.replace(/^0(?=\d)/, '');
    setState((prevState) => {
      const newPrice = [...prevState[titles.price]];
      newPrice[index] = value;
      return { ...prevState, [titles.price]: newPrice };
    });
  };

  const handleSliderChange = (value: number | number[]): void => {
    setErrorMessage('');
    if (Array.isArray(value)) {
      setState((prevState) => ({
        ...prevState,
        [titles.price]: [
          formatNumber(value[0].toString(), true),
          formatNumber(value[1].toString(), true)
        ]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    errorMessage
      ? onSubmit({
          ...values,
          [titles.price]: values[titles.price].reverse()
        })
      : onSubmit(values);
  };

  const handleReset = (): void => {
    setState({ ...defaultState });
  };

  return {
    values,
    errorMessage,
    isOpen,
    resetIsActive,
    toggleAccordion,
    handleChange,
    handleInputChange,
    handleSliderChange,
    handleSubmit,
    handleReset
  };
};

export default useTutorFilters;
