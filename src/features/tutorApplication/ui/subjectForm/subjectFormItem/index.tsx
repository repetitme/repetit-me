import { useState } from 'react';

import cn from 'classnames';

import useForm from '../../../../../shared/hooks/useForm';
import Input from '../../../../../shared/ui/input';
import Select from '../../../../../shared/ui/select';
import Switcher from '../../../../../shared/ui/switcher';
import Wrapper from '../../../../../shared/ui/wrapper';
import * as data from './data';
import ProfileCategories from './profileCategories';

import styles from './index.module.scss';

import { SubjectFormItemProps } from '../type';

const SubjectFormItem = ({ index, onChange }: SubjectFormItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const { values, handleChange, setValues } = useForm({
    discipline: data.disciplines[0],
    status: data.status[0],
    target: data.subjectTarget[0],
    experience: '',
    isActive: true,
    categories: [{ ageCategory: data.ageCategories[0].label, price: '1500' }]
  });

  const handleCategoryPriceChange =
    (categoryIndex: number) => (newPrice: string) => {
      const updatedCategories = [...values.categories];
      updatedCategories[categoryIndex] = {
        ...updatedCategories[categoryIndex],
        price: newPrice
      };

      const newValues = { ...values, categories: updatedCategories };
      setValues(newValues);
      onChange?.(newValues);
    };

  const handleSelectChange = (fieldName: string) => (selectedOption: any) => {
    const newValues = { ...values, [fieldName]: selectedOption };
    setValues(newValues);
    onChange?.(newValues);
  };

  const handleAddCategory = () => {
    const newCategory = {
      ageCategory: data.ageCategories[0].label,
      price: '1500'
    };
    const newValues = {
      ...values,
      categories: [...values.categories, newCategory]
    };
    setValues(newValues);
    onChange?.(newValues);
  };

  return (
    <Wrapper
      large
      className={cn(styles.wrapper, !isActive && styles['wrapper--disabled'])}
    >
      <div className={styles.header}>
        <h3 className={styles.header__title}>{`Предмет №${index + 1}`}</h3>
        <Switcher isActive={isActive} onChange={setIsActive} />
      </div>
      <div className={styles.options}>
        <div className={styles.options__disciplines}>
          <Select
            label="Предмет"
            options={data.disciplines}
            placeholder="Математика"
            defaultValue={data.disciplines[0]}
            value={values.discipline}
            onChange={handleSelectChange('discipline')}
          />
        </div>
        <div className={styles.options__status}>
          <Select
            label="Статус"
            options={data.status}
            placeholder="Частный преподаватель"
            defaultValue={data.status[0]}
            value={values.status}
            onChange={handleSelectChange('status')}
          />
        </div>
        <div className={styles['options__categories']}>
          {values.categories.map((category, index) => (
            <ProfileCategories
              key={index}
              data={data.ageCategories}
              category={category}
              isLast={index === values.categories.length - 1}
              onAddCategory={handleAddCategory}
              onChange={handleCategoryPriceChange(index)}
            />
          ))}
        </div>
        <div className={styles.options__target}>
          <Select
            label="Цель занятий"
            options={data.subjectTarget}
            placeholder="Повышение успеваемости"
            defaultValue={data.subjectTarget[0]}
            value={values.target}
            onChange={handleSelectChange('target')}
          />
        </div>
        <div className={styles.options__experience}>
          <Input
            name="experience"
            value={values.experience}
            onChange={handleChange}
            label="Стаж"
            placeholder="3 года"
            type="text"
            style={{ inlineSize: '100%' }}
            required
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SubjectFormItem;
