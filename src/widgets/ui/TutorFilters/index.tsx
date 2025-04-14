import { useState } from 'react';

import cn from 'classnames';

import Button from '../../../shared/button';
import Input from '../../../shared/ui/input';
import useForm from './../../../shared/hooks/useForm';
import * as data from './data';
import priceSlider from './slider';

import styles from './index.module.scss';

import { TButton } from './types';

const defaultState = {
  subject: '',
  foreignLanguage: '',
  speechTherapy: '',
  others: '',
  goal: '',
  ageBracket: data.ageBrackets[0],
  experience: '',
  gender: data.gender[0],
  rating: '',
  option: ''
};

export const TutorFilters = (): React.JSX.Element => {
  const { values, handleChange, setValues } = useForm(defaultState);
  const [price, setPrice] = useState<number | number[]>([1500, 2000]);
  const [priceValue, setPriceValue] = useState<string>('');
  const resetIsActive = JSON.stringify(values) !== JSON.stringify(defaultState);

  const handleSliderChange = (value: number | number[]): void => {
    setPrice(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleReset = (): void => {
    setValues(defaultState);
  };

  const checkbox = (title: string, items: string[]): React.JSX.Element => {
    return (
      <div className={styles.checkboxes}>
        {title && <h4 className={styles.checkboxes__title}>{title}</h4>}
        <ul className={styles.checkboxes__list}>
          {items.map((item) => (
            <li key={item} className={styles.checkboxes__checkbox}>
              <input
                type="checkbox"
                name={title.toLowerCase()}
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

  const accordion = (title: string, items: string[]): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={styles.accordion}>
        <button
          className={styles.accordion__button}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.accordion__icon} />
          <h3 className={styles.accordion__title}>{title}</h3>
        </button>
        <div
          className={cn(styles.accordion__content, {
            [styles.accordion__open]: isOpen
          })}
        >
          {checkbox('', items)}
        </div>
      </div>
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
                name={title.toLowerCase()}
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

  const filterButton = ({
    text,
    className,
    onClick
  }: TButton): React.JSX.Element => {
    return (
      <Button
        size="large"
        variant="purple"
        text={text}
        className={className}
        onClick={onClick}
      />
    );
  };

  const priceInput = () => {
    return (
      <>
        <h2 className={styles.filters__title}>Цена за час</h2>
        <div className={styles.prices}>
          <Input
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            variant="price"
          />
          <Input
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            variant="price"
          />
        </div>
      </>
    );
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filters__title__main}>
        <h2>Запросы на репетитора</h2>
        <span className={styles.filters__title__sub}>
          {/* {percentage} */}
          {`1%`}
        </span>
      </div>
      <form onSubmit={handleSubmit} className={styles.filters__form}>
        <div className={styles.accordion__wrapper}>
          <h3 className={styles.filters__title}>{data.titles.subjects}</h3>
          {accordion(data.titles.schoolSubjects, data.subjects)}
          {accordion(data.titles.foreignLanguage, data.foreignLanguages)}
          {accordion(data.titles.speechTherapy, data.speechTherapy)}
          {accordion(data.titles.others, data.others)}
        </div>
        {checkbox(data.titles.goals, data.goals)}
        {radio(data.titles.ageBracket, data.ageBrackets)}
        {priceInput()}
        {priceSlider({
          value: Array.isArray(price) ? price : [price],
          onChange: handleSliderChange
        })}
        {checkbox(data.titles.experience, data.experience)}
        {radio(data.titles.gender, data.gender)}
        {checkbox(data.titles.rating, data.rating)}
        {checkbox(data.titles.option, data.option)}
        {filterButton({
          text: 'Применить'
        })}
      </form>
      {resetIsActive &&
        filterButton({
          text: 'Сбросить',
          className: styles.filters__reset,
          onClick: handleReset
        })}
    </section>
  );
};

export default TutorFilters;
