import cn from 'classnames';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Input from '../../../../../shared/ui/input';

import './customSliderStyles.scss';
import styles from './index.module.scss';

import { TPrices } from './types';

export const Prices = ({
  title,
  errorMessage,
  values,
  sliderValues,
  handleSliderChange,
  handleInputChange
}: TPrices) => {
  const formatValue = (index: number) => values[title][index];
  return (
    <div className={styles.prices}>
      <h2 className={styles.title}>Цена за час</h2>
      <div className={styles.prices__inputs}>
        <Input
          required
          value={formatValue(0)}
          onChange={(e) => handleInputChange(e, 0)}
          variant="price"
          name="price"
        />
        <Input
          required
          value={formatValue(1)}
          onChange={(e) => handleInputChange(e, 1)}
          variant="price"
          name="price"
        />
      </div>
      <span
        className={cn(styles.prices__error, {
          [styles.prices__error_active]: errorMessage
        })}
      >
        {errorMessage}
      </span>
      <Slider
        min={300}
        max={4000}
        step={50}
        range
        className={styles.prices__slider}
        value={sliderValues}
        onChange={handleSliderChange}
        pushable={true}
      />
    </div>
  );
};
