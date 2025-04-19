import { useState } from 'react';

import cn from 'classnames';

import editIcon from '../../../assets/icons/editIcon.svg';
import Button from '../../../shared/button';
import Input, { formatNumber } from '../../../shared/ui/input';
import * as data from './data';
import priceSlider from './slider';

import styles from './index.module.scss';

import { TButton, TCheckbox, TRadio, TutorFiltersProps } from './types';

export const TutorFilters = ({
  onSubmit,
  percentage = 1
}: TutorFiltersProps) => {
  const [values, setState] = useState(data.defaultState);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState<boolean[]>(data.accordionGroups.map(() => false));
  const resetIsActive =
    JSON.stringify(values) !== JSON.stringify(data.defaultState);
  const toggleAccordion = (index: number): void => {
    setIsOpen((prevState) => prevState.map((item, i) => (i === index ? !item : item)));
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

  const checkbox = ({ title, items, index }: TCheckbox): React.JSX.Element => {
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
                checked={!!values[title]?.includes(item)}
              />
              <span>{item}</span>
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
          return (
            <div
              key={index}
              className={cn(styles.accordions_item, {
                [styles.accordions__open]: isOpen[index]
              })}
            >
              <button
                type="button"
                className={styles.accordions__button}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={styles.accordions__title}>{title}</h3>
                <span className={styles.accordions__chevron} />
              </button>
              <div className={styles.accordions__content}>
                {checkbox({ title, items, index })}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const radio = ({ title, items }: TRadio): React.JSX.Element => {
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
                checked={values[title]?.[0] === item}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const priceInput = () => {
    const formatValue = (index: number) => values[data.titles.price][index];
    return (
      <>
        <div className={styles.prices__inputs}>
          <Input
            required
            value={formatValue(0)}
            onChange={(e) => handleInputChange(e, 0)}
            variant="price"
          />
          <Input
            required
            value={formatValue(1)}
            onChange={(e) => handleInputChange(e, 1)}
            variant="price"
          />
        </div>
        <span
          className={cn(styles.prices__error, {
            [styles['prices__error--active']]: errorMessage
          })}
        >
          {errorMessage}
        </span>
      </>
    );
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
        <div className={styles.accordions}>
          <h3 className={styles.filters__title}>{data.titles.subjects}</h3>
          {accordions()}
        </div>
        {checkbox({ title: data.titles.goals, items: data.goals })}
        {radio({ title: data.titles.ageBrackets, items: data.ageBrackets })}
        <div className={styles.prices}>
          <h2 className={styles.filters__title}>Цена за час</h2>
          {priceInput()}
          {priceSlider({
            value: values[data.titles.price].map((item) =>
              Number(item.replace(/\D/g, ''))
            ),
            onChange: handleSliderChange
          })}
        </div>
        {checkbox({ title: data.titles.experience, items: data.experience })}
        {radio({ title: data.titles.gender, items: data.gender })}
        {checkbox({ title: data.titles.rating, items: data.rating })}
        {checkbox({ title: data.titles.option, items: data.option })}
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
