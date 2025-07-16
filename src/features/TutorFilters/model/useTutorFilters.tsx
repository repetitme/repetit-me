import { useState } from 'react';

import { formatNumber } from '../../../shared/ui/input';
import {
  accordionGroups,
  defaultState,
  errorMessages,
  titles
} from '../config/constants';
import * as data from '../config/data';

import { TUseTutorFilters } from '../types/types';

const useTutorFilters = ({ onSubmit, onReset }: TUseTutorFilters) => {
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
    let newValue = checked
      ? [...(values[name] || []), value]
      : values[name].filter((item: string) => item !== value);
    if (value === 'Все') {
      checked
        ? (newValue = name === titles.subjects ? data.subjects : data.rating)
        : (newValue = []);
    }
    if (
      (value !== 'Все' && name === titles.rating) ||
      (value !== 'Все' && name === titles.subjects)
    ) {
      newValue = newValue.filter((item: string) => item !== 'Все');
    }
    if (
      titles.subjects === name &&
      newValue.length ===
        data.subjects.filter((item: string) => item !== 'Все').length
    ) {
      newValue = data.subjects;
    }
    if (
      titles.rating === name &&
      newValue.length ===
        data.rating.filter((item: string) => item !== 'Все').length
    ) {
      newValue = data.rating;
    }
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

  const scrollToTop = (): void => {
    const el = document.getElementById('catalog') as HTMLElement;
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToTop();
    errorMessage === errorMessages.min || errorMessage === errorMessages.max
      ? onSubmit({
          ...values,
          [titles.price]: values[titles.price].reverse()
        })
      : onSubmit(values);
  };

  const handleReset = (): void => {
    scrollToTop();
    setState({ ...defaultState });
    onReset({ ...defaultState });
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
