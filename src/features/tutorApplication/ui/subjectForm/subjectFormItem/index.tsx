import { useState } from 'react';

import cn from 'classnames';

import useForm from '../../../../../shared/hooks/useForm';
import Input from '../../../../../shared/ui/input';
import Select from '../../../../../shared/ui/select';
import Switcher from '../../../../../shared/ui/switcher';
import Wrapper from '../../../../../shared/ui/wrapper';
import * as data from './data';
import { useExperienceHandler } from './hooks/useExperienceHandler';
import ProfileCategories from './profileCategories';

import styles from './index.module.scss';

import { SubjectFormItemProps, initialSubject } from '../type';

const SubjectFormItem: React.FC<DisciplinesBlockProps> = ({ index }) => {
  const { values, handleChange } = useForm({ experience: '' });
  const [maxInputLength, setMaxInputLength] = useState<number>(6);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [categories, setCategories] = useState<
    Array<{ ageCategory: string; price: string }>
  >([
    {
      ageCategory: data.ageCategories[0].label,
      price: '1 500'
    }
  ]);

  const handleExperienceChange = useExperienceHandler(
    handleChange,
    setMaxInputLength
  );

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
        <h3 className={styles.header__title}>{`Предмет № ${index + 1}`}</h3>
        <Switcher isActive={isActive} onChange={setIsActive} />
      </div>
      <div className={styles.options}>
        <div className={styles.options__disciplines}>
          <Select
            label="Предмет"
            options={data.disciplines}
            placeholder="Математика"
            defaultValue={values.discipline}
            onChange={handleSelectChange('discipline')}
          />
        </div>
        <div className={styles.options__status}>
          <Select
            label="Статус"
            options={data.status}
            placeholder="Частный преподаватель"
            defaultValue={values.status}
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
              onChange={handleCategoryChange(index)}
            />
          ))}
        </div>
        <div className={styles.options__target}>
          <Select
            label="Цель занятий"
            options={data.subjectTarget}
            placeholder="Повышение успеваемости"
            defaultValue={values.target}
            onChange={handleSelectChange('target')}
          />
        </div>
        <div className={styles.options__experience}>
          <Input
            variant="form"
            name="experience"
            value={values.experience}
            onChange={handleExperienceChange}
            label="Стаж"
            placeholder="3 года"
            type="text"
            autoComplete="off"
            maxLength={maxInputLength}
            required={true}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SubjectFormItem;
