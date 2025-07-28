import iconAdd from '../../../../../../assets/icons/icon_add.svg';
import useForm from '../../../../../../shared/hooks/useForm';
import Button from '../../../../../../shared/ui/button';
import Input from '../../../../../../shared/ui/input';
import Select from '../../../../../../shared/ui/select';

import styles from './index.module.scss';

import { ProfileCategoriesProps } from '../../type';

const ProfileCategories = ({
  data,
  category,
  isLast,
  onAddCategory,
  onChange
}: ProfileCategoriesProps) => {
  const { values, handleChange } = useForm({ price: category.price });

  const handleAgeCategoryChange = (selectedOption: any) => {
    onChange?.({
      ageCategory: selectedOption.label,
      price: values.price
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    onChange?.({
      ageCategory: category.ageCategory,
      price: e.target.value
    });
  };

  return (
    <div className={styles.container__auxiliary}>
      <div className={styles['container__options--age']}>
        <Select
          label="Возрастные категории"
          options={data}
          placeholder="Взрослый"
          defaultValue={data.find(
            (option) => option.label === category.ageCategory
          )}
          onChange={handleAgeCategoryChange}
        />
      </div>
      <div className={styles['container__options--price']}>
        <Input
          variant="price"
          name="price"
          value={values.price}
          onChange={handlePriceChange}
          label="Цена"
          placeholder={category.price}
          type="text"
          extraClass={styles['container__options--price-input']}
          maxLength={6}
          autoComplete="off"
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
