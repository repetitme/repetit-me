import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import QuickSelection from '../../widgets/QuickSelection';
import MainBlock from '../../widgets/MainBlock';
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';




const MainPage = () => {
  return (
    <>
      <MainBlock />
      <Perks />
      <WhyWe />
      <Chat />
      <QuickSelection />
      <TutorFormBlock />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
