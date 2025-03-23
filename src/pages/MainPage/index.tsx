import Recruiting from '../../widgets/Recruiting';
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';


const MainPage = () => {
  return (
    <>
      <Recruiting />
      <Perks />
      <WhyWe />
      <Chat />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
