import React, { useState } from 'react';

import cn from 'classnames';

import useForm from '../../../../shared/hooks/useForm';
import SelectField from '../../../../shared/ui/formField/selectField';
import Input from '../../../../shared/ui/input';
import Switcher from '../../../../shared/ui/switcher';
import Wrapper from '../../../../shared/ui/wrapper';
import * as data from './data';
import TutorProfileCategories from './tutorProfileCategories';

import styles from './index.module.scss';

import { DisciplinesBlockProps } from './type';

const DisciplinesBlock: React.FC<DisciplinesBlockProps> = ({ index }) => {
  const { values, handleChange } = useForm({});
  const [isActive, setIsActive] = useState<boolean>(true);
  const [categories, setCategories] = useState<
    Array<{ ageCategory: string; price: string }>
  >([
    {
      ageCategory: data.ageCategories[0].label,
      price: '1500'
    }
  ]);

  const handleAddCategory = () => {
    setCategories((prev) => [
      ...prev,
      { ageCategory: data.ageCategories[0].label, price: '1500' }
    ]);
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
          <SelectField
            label="Предметы"
            options={data.disciplines}
            placeholder="Математика"
            defaultValue={data.disciplines[0]}
          />
        </div>
        <div className={styles.options__status}>
          <SelectField
            label="Статус"
            options={data.status}
            placeholder="Частный преподаватель"
            defaultValue={data.status[0]}
          />
        </div>
        <div className={styles['options__categories']}>
          {categories.map((category, index) => (
            <TutorProfileCategories
              key={index}
              data={data.ageCategories}
              category={category}
              isLast={index === categories.length - 1}
              onAddCategory={handleAddCategory}
            />
          ))}
        </div>
        <div className={styles.options__target}>
          <SelectField
            label="Цель занятия"
            options={data.target}
            placeholder="Повышение успеваемости"
            defaultValue={data.target[0]}
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

export default DisciplinesBlock;
