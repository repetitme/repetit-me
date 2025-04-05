
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Advantages from '../../widgets/Advantages';
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
      <Chat />
      <Advantages />
      <QuestionList />
      <Footer />
    </>
  );
};

export default MainPage;
