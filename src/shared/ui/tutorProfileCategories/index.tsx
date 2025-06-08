import InputField from '../formField/inputField';
import SelectField from '../formField/selectField';
import iconAdd from './../../../assets/images/icon_add.svg';

import styles from './index.module.scss';

import { TutorProfileCategoriesProps } from './type';

const TutorProfileCategories = ({
  data,
  category,
  isLast,
  onAddCategory
}: TutorProfileCategoriesProps) => {
  return (
    <div className={styles.container__auxiliary}>
      <div className={styles['container__options--age']}>
        <SelectField
          label="Возрастная категория"
          options={data}
          placeholder={category.ageCategory}
          defaultValue={data.find(
            (option) => option.label === category.ageCategory
          )}
          onChange={(selected) => console.log(selected)}
        />
      </div>
      <div className={styles['container__options--price']}>
        <InputField
          id="price"
          label="Цена"
          type="number"
          placeholder={category.price}
          required
        />
        <p className={styles['container__options--price-currency']}>руб/час</p>
      </div>
      {isLast && (
        <button
          onClick={onAddCategory}
          className={styles['container__options--added']}
        >
          <img src={iconAdd} alt="Добавить категорию" />
          <p>Добавить категорию</p>
        </button>
      )}
    </div>
  );
};

export default TutorProfileCategories;
