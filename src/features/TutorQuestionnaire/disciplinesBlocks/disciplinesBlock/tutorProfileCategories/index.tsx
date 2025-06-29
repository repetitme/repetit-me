import useForm from '../../../../../shared/hooks/useForm';
import Input from '../../../../../shared/ui/input';
import Select from '../../../../../shared/ui/select';
import iconAdd from './../../../../../assets/images/icon_add.svg';

import styles from './index.module.scss';

import { TutorProfileCategoriesProps } from './type';

const TutorProfileCategories = ({
  data,
  category,
  isLast,
  onAddCategory
}: TutorProfileCategoriesProps) => {
  const { values, handleChange } = useForm({});

  return (
    <div className={styles.container__auxiliary}>
      <div className={styles['container__options--age']}>
        <Select
          label="Возрастные категории"
          options={data}
          placeholder={category.ageCategory}
          defaultValue={data.find(
            (option) => option.label === category.ageCategory
          )}
        />
      </div>
      <div className={styles['container__options--price']}>
        <Input
          name="price"
          value={values.price}
          onChange={handleChange}
          label="Цена"
          placeholder={category.price}
          type="number"
          style={{ inlineSize: '97px' }}
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
