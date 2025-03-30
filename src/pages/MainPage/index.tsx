import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import QuickSelection from '../../widgets/QuickSelection';
import MainBlock from '../../widgets/MainBlock';

const MainPage = () => {
  return (
    <>
      <MainBlock />
      <Perks />
      <WhyWe />
      <Chat />
      <QuickSelection />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
