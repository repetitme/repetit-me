import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';

const MainPage = () => {
  return (
    <>
      <Perks />
      <Chat />
      <QuestionList />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
