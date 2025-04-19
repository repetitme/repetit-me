import cn from 'classnames';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Input from '../../../shared/ui/input';

import styles from '../index.module.scss';

import { TPrices } from '../types';

const Prices = ({
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
      <h2 className={styles.filters__title}>Цена за час</h2>
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
      <>
        <style>
          {`
          .rc-slider-handle:focus,
          .rc-slider-handle:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }`}
        </style>
        <Slider
          min={300}
          max={7000}
          step={50}
          range
          value={sliderValues}
          onChange={handleSliderChange}
          style={{
            width: '312px'
          }}
          trackStyle={[{ backgroundColor: '#6757f1', height: '12px' }]}
          handleStyle={[
            {
              background: '#eee',
              border: 'none',
              height: '20px',
              width: '20px',
              marginBottom: '0',
              opacity: '1'
            },
            {
              backgroundColor: '#eee',
              border: 'none',
              height: '20px',
              width: '20px',
              marginBottom: '0',
              opacity: '1'
            }
          ]}
          railStyle={{
            backgroundColor: '#CFDADC',
            height: '12px',
            borderRadius: '10px'
          }}
          pushable={true}
        />
      </>
    </div>
  );
};

export default Prices;
