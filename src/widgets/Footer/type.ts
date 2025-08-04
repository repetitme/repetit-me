export type TfakeUser = {
  role: 'student' | 'tutor' | 'unauth'; // Фейковые типы, нужны для тестов. В дальнейшем роль будет приниматься из типов для пользователей
  goTelegram?: boolean;
};
