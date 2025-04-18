import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type SliderProps = {
  value: number[];
  onChange: (value: number | number[]) => void;
};

export default function priceSlider({
  value,
  onChange
}: SliderProps): React.JSX.Element {
  return (
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
        value={value}
        onChange={onChange}
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
  );
}
