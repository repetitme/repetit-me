import { getYearsAgoText } from '../../../../../../shared/utils/CorrectDeclination';

export const useExperienceHandler = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  setMaxInputLength: (length: number) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Удаляем все нецифровые символы
    const numericPart = inputValue.replace(/\D/g, '');
    // Ограничиваем длину до 2 символов
    const limitedNumberStr = numericPart.slice(0, 2);
    // Преобразуем в число
    const number = parseInt(limitedNumberStr, 10);

    if (limitedNumberStr === '') {
      handleChange({
        target: { name: 'experience', value: '' }
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }

    const experienceText = getYearsAgoText(number);

    if (experienceText.includes('года')) {
      setMaxInputLength(7);
    } else {
      setMaxInputLength(6);
    }

    handleChange({
      target: { name: 'experience', value: experienceText }
    } as React.ChangeEvent<HTMLInputElement>);
  };
};
