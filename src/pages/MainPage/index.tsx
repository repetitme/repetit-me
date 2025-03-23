import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';

const MainPage = () => {
  return (
    <>
      <Perks />
      <WhyWe />
      <TutorFormBlock />
      <Chat />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
