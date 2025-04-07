import { useState } from 'react';
import * as data from './data';
import Button from '../../../shared/button';
import styles from './index.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import useForm from './../../../shared/hooks/useForm';
import cn from 'classnames';

export const TutorFilters = (): React.JSX.Element => {
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

  const { values, handleChange, setValues } = useForm(defaultState);
  const [price, setPrice] = useState<number | number[]>([1500, 2000]);
  const resetIsActive = JSON.stringify(values) !== JSON.stringify(defaultState);

  const handleSliderChange = (value: number | number[]): void => {
    setPrice(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Test
    console.log(resetIsActive);
  };

  const handleReset = (): void => {
    setValues(defaultState);
  };

  const checkbox = (title: string, items: string[]): React.JSX.Element => {
    return (
      <div className={styles.checkboxes}>
        {title && <h3 className={styles.checkboxes__title}>{title}</h3>}
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
          <h3
            className={cn(styles.accordion__title, {
              [styles.accordion__active]: isOpen
            })}
          >
            {title}
          </h3>
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

  return (
    <section className={styles.filters}>
      <h2 className={styles.filters__title}>Запросы на репетитора</h2>
      <form onSubmit={handleSubmit} className={styles.filters__form}>
        <h3>{data.titles.subjects}</h3>
        {accordion(data.titles.schoolSubjects, data.subjects)}
        {accordion(data.titles.foreignLanguage, data.foreignLanguages)}
        {accordion(data.titles.speechTherapy, data.speechTherapy)}
        {accordion(data.titles.others, data.others)}
        {checkbox(data.titles.goals, data.goals)}
        {radio(data.titles.ageBracket, data.ageBrackets)}
        <Slider
          className={styles.slider}
          min={100}
          max={7000}
          step={100}
          range
          value={price}
          onChange={handleSliderChange}
          defaultValue={[1500, 2500]}
          trackStyle={[{ backgroundColor: '#6757f1', height: '20px' }]}
          handleStyle={[
            {
              background: '#eee',
              border: 'none',
              height: '20px',
              width: '20px',
              marginTop: '0',
              opacity: '1'
            },
            {
              backgroundColor: '#eee',
              border: 'none',
              height: '20px',
              width: '20px',
              marginTop: '0',
              opacity: '1'
            }
          ]}
          railStyle={{
            backgroundColor: '#CFDADC',
            height: '20px',
            borderRadius: '10px'
          }}
          // ariaValueTextFormatterForHandle={}
          pushable={true}
        />
        {checkbox(data.titles.experience, data.experience)}
        {radio(data.titles.gender, data.gender)}
        {checkbox(data.titles.rating, data.rating)}
        {checkbox(data.titles.option, data.option)}
        <Button size="large" text="Применить" variant="purple" />
      </form>
      {resetIsActive && (
        <Button
          size="large"
          text="Сбросить"
          variant="purple"
          onClick={handleReset}
          className={styles.filters__reset}
        />
      )}
    </section>
  );
};

export default TutorFilters;
