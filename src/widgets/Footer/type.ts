export type TfakeUser = {
  role: 'student' | 'teacher' | 'unauthorized'; // Фейковые типы, нужны для тестов. В дальнейшем роль будет приниматься из типов для пользователей
  goTelegram?: boolean;
};
