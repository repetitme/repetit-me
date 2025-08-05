import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router';

import icon_arrowDown from '../../assets/images/icon-arrowdown.svg';
import useClickOutside from '../../shared/hooks/useClickOutside';
import Button from '../../shared/ui/button';
import { mockTutors } from '../../widgets/UserCard/fakeApi/mockData';
import Carousel from '../Carousel';
import Dropdown from '../Dropdown';
import { disciplines, dropdown } from './data';

import styles from './index.module.scss';

export const QuickSelection = () => {
  const navigate = useNavigate();
  const [stateOption, setStateOption] = useState<'all' | string>('all');
  const [stateMore, setStateMore] = useState(false);
  const [stateItemOther, setStateItemOther] = useState(false);
  const [dropdownList, setDropdownList] = useState(dropdown);
  const [disciplineList, setDisciplineList] = useState(disciplines);
  const [tutors, setTutors] = useState(mockTutors);
  const lastDiscipline = disciplines[disciplines.length - 1];
  const [change, setChange] = useState(false);
  const handleOptionChange = (option: string) => {
    setStateOption(option);
    setStateItemOther(false);
  };
  const dropdownRef = useClickOutside(() => {
    setStateMore(false);
    setStateItemOther(false);
  });

  const filter = (disciplineID: string) => {
    const newTutors = [...mockTutors];
    const discipline = disciplineList.find(
      (discipline) => discipline.id === disciplineID
    )?.discipline;
    if (stateOption === 'all' || !discipline) {
      setTutors(mockTutors);
      return;
    }
    const filteredTutors = newTutors.filter((tutor) => {
      return tutor.subjects.includes(discipline!);
    });
    setTutors(filteredTutors);
  };

  useEffect(() => {
    setChange(true);
    setTimeout(() => {
      filter(stateOption);
      setChange(false);
    }, 300);
  }, [stateOption, disciplineList]);

  const handleOther = (disciplineID: string) => {
    const newDisciplineList = [...disciplineList];
    newDisciplineList.splice(
      disciplines.length - 2,
      disciplineList.length === disciplines.length ? 0 : 1,
      dropdownList.find((discipline) => discipline.id === disciplineID)!
    );
    const newDropdownList = [...dropdownList];
    newDropdownList.splice(
      dropdownList.findIndex((discipline) => discipline.id === disciplineID),
      1,
      disciplineList[disciplines.length - 2]
    );
    setDisciplineList(newDisciplineList);
    setDropdownList(newDropdownList);
    setStateOption(disciplineID);
    setStateItemOther(false);
    setStateMore(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h2 className={styles.container__header_title}>
          Быстрый подбор{' '}
          <span className={styles.container__header_title_gradient}>
            репетитора
          </span>
        </h2>
        <ul className={styles.container__header_list}>
          <li
            className={classNames(
              styles.container__header_list_item,
              stateOption === 'all' && styles.container__header_item_active
            )}
            onClick={() => handleOptionChange('all')}
          >
            <span className={styles.container__header_list_item_text}>Все</span>
          </li>
          {disciplineList
            .map((discipline) => {
              return (
                <li
                  className={classNames(
                    styles.container__header_list_item,
                    stateOption === discipline.id &&
                      styles.container__header_item_active
                  )}
                  key={discipline.id}
                  onClick={() => handleOptionChange(discipline.id)}
                >
                  <span className={styles.container__header_list_item_text}>
                    {discipline.discipline}
                  </span>
                </li>
              );
            })
            .slice(0, disciplines.length - 1)}
          <li
            className={classNames(
              styles.container__header_list_more,
              styles.container__header_list_item,
              stateItemOther ? styles.container__header_item_active : ''
            )}
            onClick={(e) => {
              e.stopPropagation();
              setStateMore(!stateMore);
              setStateItemOther(!stateItemOther);
            }}
          >
            <span className={styles.container__header_list_item_text}>
              {lastDiscipline.discipline}
            </span>
            <img
              className={styles.container__header_list_item_arrow}
              src={icon_arrowDown}
              alt="Ещё"
            />
          </li>
          <div
            className={styles.container__header_list_dropdown}
            ref={dropdownRef}
          >
            <Dropdown
              list={dropdownList}
              setStateOption={handleOther}
              stateMore={stateMore}
            />
          </div>
        </ul>
      </div>
      <Carousel tutorsCard={tutors} change={change} />
      <Button
        text={'Посмотреть всех'}
        variant={'purple'}
        className={styles.container__button}
        onClick={() => {
          navigate('/tutor-catalog');
        }}
      />
    </div>
  );
};
export default QuickSelection;
