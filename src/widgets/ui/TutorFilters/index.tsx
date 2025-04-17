import { useState } from 'react';

import cn from 'classnames';

import Button from '../../../shared/button';
import Input, { formatNumber } from '../../../shared/ui/input';
import * as data from './data';
import priceSlider from './slider';

import styles from './index.module.scss';

import { TButton, TState, TutorFiltersProps } from './types';

const defaultState: TState = {
  subject: [],
  foreignLanguage: [],
  speechTherapy: [],
  others: [],
  goal: [],
  ageBracket: [data.ageBrackets[0]],
  price: ['1 500 ₽', '2 000 ₽'],
  experience: [],
  gender: [data.gender[0]],
  rating: [],
  option: []
};

export const TutorFilters = ({
  onSubmit,
  percentage = 1
}: TutorFiltersProps) => {
  const [values, setState] = useState(defaultState);
  const resetIsActive = JSON.stringify(values) !== JSON.stringify(defaultState);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    setState((prevState) => {
      const newPrice = [...prevState.price];
      newPrice[index] = e.target.value;
      return { ...prevState, price: newPrice };
    });
  };

  const handleSliderChange = (value: number | number[]): void => {
    if (Array.isArray(value)) {
      setState((prevState) => ({
        ...prevState,
        price: [
          formatNumber(value[0].toString(), true),
          formatNumber(value[1].toString(), true)
        ]
      }));
    }
  };

  const checkbox = (
    title: string,
    items: string[],
    index?: number
  ): React.JSX.Element => {
    return (
      <div className={styles.checkboxes}>
        {!Number.isFinite(index) && (
          <h4 className={styles.checkboxes__title}>{title}</h4>
        )}
        <ul className={styles.checkboxes__list}>
          {items.map((item) => (
            <li key={item} className={styles.checkboxes__checkbox}>
              <input
                type="checkbox"
                name={title}
                value={item}
                onChange={handleChange}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const accordions = (): React.JSX.Element => {
    return (
      <>
        {data.accordionGroups.map(({ title, items }, index) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <div key={index} className={styles.accordions_item}>
              <button
                type="button"
                className={styles.accordions__button}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={styles.accordions__icon} />
                <h3 className={styles.accordions__title}>{title}</h3>
              </button>
              <div
                className={cn(styles.accordions__content, {
                  [styles.accordions__open]: isOpen
                })}
              >
                {checkbox(title, items, index)}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const radio = (title: string, items: string[]): React.JSX.Element => {
    return (
      <div className={styles.radio}>
        <h3 className={styles.radio__title}>{title}</h3>
        <ul className={styles.radio__list}>
          {items.map((item) => (
            <li key={item} className={styles.radio__checkbox}>
              <input
                type="radio"
                name={title}
                value={item}
                onChange={handleChange}
                defaultChecked={item === items[0]}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const priceInput = () => {
    return (
      <>
        <div className={styles.prices__inputs}>
          <Input
            value={
              Array.isArray(values.price) ? values.price[0].toString() : ''
            }
            onChange={(e) => handleInputChange(e, 0)}
            variant="price"
          />
          <Input
            value={
              Array.isArray(values.price) ? values.price[1].toString() : ''
            }
            onChange={(e) => handleInputChange(e, 1)}
            variant="price"
          />
        </div>
      </>
    );
  };

  const filterButton = ({
    className,
    onClick,
    reset
  }: TButton): React.JSX.Element => {
    return (
      <Button
        size="large"
        variant={reset ? 'white' : 'purple'}
        text={reset ? 'Сбросить' : 'Применить'}
        className={className}
        onClick={onClick}
        icon={reset ? '../../../assets/icons/Icon_Edit.svg' : ''}
      />
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleReset = (): void => {
    setState(defaultState);
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filters__title__main}>
        <h2>Запросы на репетитора</h2>
        <span className={styles.filters__title__sub}>{`${percentage}%`}</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.filters__form}>
        <div className={styles.accordions}>
          <h3 className={styles.filters__title}>{data.titles.subjects}</h3>
          {accordions()}
        </div>
        {checkbox(data.titles.goals, data.goals)}
        {radio(data.titles.ageBracket, data.ageBrackets)}
        <div className={styles.prices}>
          <h2 className={styles.filters__title}>Цена за час</h2>
          {priceInput()}
          {priceSlider({
            value: values.price.map((item) => Number(item.replace(/\D/g, ''))),
            onChange: handleSliderChange
          })}
        </div>
        {checkbox(data.titles.experience, data.experience)}
        {radio(data.titles.gender, data.gender)}
        {checkbox(data.titles.rating, data.rating)}
        {checkbox(data.titles.option, data.option)}
        {filterButton({})}
      </form>
      {resetIsActive &&
        filterButton({
          className: styles.filters__reset,
          onClick: handleReset,
          reset: true
        })}
    </section>
  );
};

export default TutorFilters;
