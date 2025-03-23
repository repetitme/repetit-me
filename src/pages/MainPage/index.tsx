import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Advantages from '../../widgets/Advantages';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';

const MainPage = () => {
  return (
    <>
      <Perks />
      <WhyWe />
      <Chat />
      <Advantages />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
