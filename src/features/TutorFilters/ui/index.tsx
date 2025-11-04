import Button from '../../../shared/ui/button';
import { accordionGroups, titles } from '../config/constants';
import * as data from '../config/data';
import useTutorFilters from '../model/useTutorFilters';
import { Accordions, Checkbox, Prices, Radio } from './components';

import styles from './index.module.scss';

import { TButton, TutorFiltersProps } from '../types/types';

const TutorFilters = ({
  onSubmit,
  noResultsFound,
  percentage = 1,
  onToggleTooltip,
  onHideTooltip,
  onReset
}: TutorFiltersProps) => {
  const {
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
  } = useTutorFilters({ onSubmit, onReset });

  const handleApplyWithTooltip = (e: React.FormEvent) => {
    e.preventDefault();
    if (onHideTooltip) {
      onHideTooltip();
    }
    handleSubmit(e);
  };

  const filterButton = (reset?: TButton): React.JSX.Element => {
    return (
      <Button
        variant={reset ? 'reset' : 'purple'}
        text={reset ? 'Сбросить фильтр' : 'Применить'}
        onClick={reset ? handleReset : undefined}
      />
    );
  };

  return (
    <section className={styles.filters} id="filters">
      <div className={styles.filters__title__main}>
        <h2 onClick={onToggleTooltip}>Запросы на репетитора</h2>
        <span className={styles.filters__title__sub}>{`${percentage}%`}</span>
      </div>
      <form onSubmit={handleApplyWithTooltip} className={styles.filters__form}>
        {Accordions({
          data: accordionGroups,
          isOpen,
          toggleAccordion,
          Checkbox,
          values,
          handleChange
        })}
        {Checkbox({
          title: titles.goals,
          items: data.goals,
          values: values[titles.goals],
          handleChange
        })}
        {Radio({
          title: titles.ageBrackets,
          items: data.ageBrackets,
          values,
          handleChange
        })}
        {Prices({
          title: titles.price,
          errorMessage,
          values,
          handleInputChange,
          sliderValues: values[titles.price].map((item) =>
            Number(item.replace(/\D/g, ''))
          ),
          handleSliderChange
        })}
        {Checkbox({
          title: titles.experience,
          items: data.experience,
          values: values[titles.experience],
          handleChange
        })}
        {Radio({
          title: titles.gender,
          items: data.gender,
          values,
          handleChange
        })}
        {Checkbox({
          title: titles.rating,
          items: data.rating,
          values: values[titles.rating],
          handleChange
        })}
        {Checkbox({
          title: titles.option,
          items: data.option,
          values: values[titles.option],
          handleChange
        })}
        {filterButton(noResultsFound ? { reset: true } : undefined)}
      </form>
      {!noResultsFound && resetIsActive && filterButton({ reset: true })}
    </section>
  );
};

export default TutorFilters;
