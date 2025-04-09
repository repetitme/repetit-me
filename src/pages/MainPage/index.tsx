import QuickSelection from '../../widgets/QuickSelection';
import MainBlock from '../../widgets/MainBlock';
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import Advantages from '../../widgets/Advantages';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';
import Recruiting from '../../widgets/Recruiting';

const MainPage = () => {
  return (
    <>
      <MainBlock />
      <Perks />
      <WhyWe />
      <Chat />
      <QuickSelection />
      <Recruiting />
      <TutorFormBlock />
      <Advantages />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
