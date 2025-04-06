import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import MainBlock from '../../widgets/MainBlock';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';
import { WhyWe } from '../../widgets/WhyWe';

const MainPage = () => {
  return (
    <>
      <MainBlock />
      <Perks />
      <WhyWe />
      <Chat />
      <TutorFormBlock />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
