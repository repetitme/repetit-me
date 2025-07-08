export type TfakeUser = {
  role: 'student' | 'teacher' | 'unauth'; // Фейковые типы, нужны для тестов. В дальнейшем роль будет приниматься из типов для пользователей
  goTelegram?: boolean;
};
