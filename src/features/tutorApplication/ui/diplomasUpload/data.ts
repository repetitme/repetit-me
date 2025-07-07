interface BlockContentType {
  wrapperTitle: string;
  wrapperDescription: string;
  containerDescription: string;
}

export const blockContent: BlockContentType = {
  wrapperTitle: 'Дипломы и сертификаты',
  wrapperDescription: `Сертификаты, дипломы подтверждают ваш профессиональный статус и/или 
    квалификацию в какой-либо области, что помогает повысить доверие учеников`,
  containerDescription: `Убедитесь, что скан/фотографии документов соответствуют нашим
  требованиям:`
};

export const requirements = [
  'Формат — PNG, JPG',
  'Размер — не более 10 Мб.',
  'Содержит только данные, подтверждающие квалификацию по предметам. '
];
