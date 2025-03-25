import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import QuickSelection from '../../widgets/QuickSelection';

const MainPage = () => {
  return (
    <>
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
