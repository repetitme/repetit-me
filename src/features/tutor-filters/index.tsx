import { useState } from 'react';

import editIcon from '../../assets/icons/editIcon.svg';
import Button from '../../shared/button';
import { formatNumber } from '../../shared/ui/input';
import Accordions from './components/Accordion';
import Checkbox from './components/Checkbox';
import Prices from './components/Prices';
import Radio from './components/Radio';
import * as data from './data';

import styles from './index.module.scss';

import { TButton, TutorFiltersProps } from './types';

export const TutorFilters = ({
  onSubmit,
  percentage = 1
}: TutorFiltersProps) => {
  const [values, setState] = useState(data.defaultState);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState<boolean[]>(
    data.accordionGroups.map(() => false)
  );
  const resetIsActive =
    JSON.stringify(values) !== JSON.stringify(data.defaultState);
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
    const min = values[data.titles.price][0];
    const max = values[data.titles.price][1];
    const price = toNumber(value);
    let errorMessage = '';
    if (index === 0 && price > toNumber(max)) {
      errorMessage = data.errorMessages.min;
    }
    if (index === 1 && price < toNumber(min)) {
      errorMessage = data.errorMessages.max;
    }
    if (min.length < 3 || max.length < 3) {
      errorMessage = data.errorMessages.required;
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
      const newPrice = [...prevState[data.titles.price]];
      newPrice[index] = value;
      return { ...prevState, [data.titles.price]: newPrice };
    });
  };

  const handleSliderChange = (value: number | number[]): void => {
    setErrorMessage('');
    if (Array.isArray(value)) {
      setState((prevState) => ({
        ...prevState,
        [data.titles.price]: [
          formatNumber(value[0].toString(), true),
          formatNumber(value[1].toString(), true)
        ]
      }));
    }
  };

  const filterButton = ({ onClick, reset }: TButton): React.JSX.Element => {
    return (
      <Button
        variant={reset ? 'reset' : 'purple'}
        text={reset ? 'Сбросить фильтр' : 'Применить'}
        onClick={onClick}
        icon={reset ? editIcon : ''}
      />
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    errorMessage
      ? onSubmit({
          ...values,
          [data.titles.price]: values[data.titles.price].reverse()
        })
      : onSubmit(values);
  };

  const handleReset = (): void => {
    setState({ ...data.defaultState });
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filters__title__main}>
        <h2>Запросы на репетитора</h2>
        <span className={styles.filters__title__sub}>{`${percentage}%`}</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.filters__form}>
        {Accordions({
          data: data.accordionGroups,
          isOpen,
          toggleAccordion,
          titles: data.titles,
          Checkbox,
          values,
          handleChange
        })}
        {Checkbox({
          title: data.titles.goals,
          items: data.goals,
          values: values[data.titles.goals],
          handleChange
        })}
        {Radio({
          title: data.titles.ageBrackets,
          items: data.ageBrackets,
          values,
          handleChange
        })}
        {Prices({
          title: data.titles.price,
          errorMessage,
          values,
          handleInputChange,
          sliderValues: values[data.titles.price].map((item) =>
            Number(item.replace(/\D/g, ''))
          ),
          handleSliderChange
        })}
        {Checkbox({
          title: data.titles.experience,
          items: data.experience,
          values: values[data.titles.experience],
          handleChange
        })}
        {Radio({
          title: data.titles.gender,
          items: data.gender,
          values,
          handleChange
        })}
        {Checkbox({
          title: data.titles.rating,
          items: data.rating,
          values: values[data.titles.rating],
          handleChange
        })}
        {Checkbox({
          title: data.titles.option,
          items: data.option,
          values: values[data.titles.option],
          handleChange
        })}
        {filterButton({})}
      </form>
      {resetIsActive &&
        filterButton({
          onClick: handleReset,
          reset: true
        })}
    </section>
  );
};

export default TutorFilters;
