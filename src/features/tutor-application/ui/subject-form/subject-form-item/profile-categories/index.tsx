import iconAdd from '../../../../../../assets/icons/icon_add.svg';
import useForm from '../../../../../../shared/hooks/useForm';
import Button from '../../../../../../shared/ui/button';
import Input from '../../../../../../shared/ui/input';
import Select from '../../../../../../shared/ui/select';

import styles from './index.module.scss';

import { ProfileCategoriesProps } from '../../../../lib/type';

const ProfileCategories = ({
  data,
  category,
  isLast,
  onAddCategory
}: ProfileCategoriesProps) => {
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
        <Button
          text="Добавить категорию"
          variant="transparent"
          icon={iconAdd}
          onClick={onAddCategory}
          className={styles['container__options--added']}
        />
      )}
    </div>
  );
};

export default ProfileCategories;
