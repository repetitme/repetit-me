import React, { useState } from 'react';

import cn from 'classnames';

import InputField from '../../../../shared/ui/formField/inputField';
import SelectField from '../../../../shared/ui/formField/selectField';
import Switcher from '../../../../shared/ui/switcher';
import TutorProfileCategories from '../../../../shared/ui/tutorProfileCategories';
import Wrapper from '../../../../shared/ui/wrapper';
import * as data from './data';

import styles from './index.module.scss';

import { DisciplinesBlockProps } from './type';

const DisciplinesBlock: React.FC<DisciplinesBlockProps> = ({ index }) => {
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
            onChange={(selected) => console.log(selected)}
          />
        </div>
        <div className={styles.options__status}>
          <SelectField
            label="Статус"
            options={data.status}
            placeholder="Частный преподаватель"
            defaultValue={data.status[0]}
            onChange={(selected) => console.log(selected)}
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
            onChange={(selected) => console.log(selected)}
          />
        </div>
        <div className={styles.options__experience}>
          <InputField
            id="experience"
            label="Стаж"
            type="textarea"
            placeholder="3 года"
            required
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default DisciplinesBlock;
