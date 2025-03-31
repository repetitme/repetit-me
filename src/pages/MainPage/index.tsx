import Recruiting from '../../widgets/Recruiting';
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';
import MainBlock from '../../widgets/MainBlock';


const MainPage = () => {
  return (
    <>
      <MainBlock />        
      <Perks />
      <WhyWe />
      <Recruiting />
      <Chat />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
