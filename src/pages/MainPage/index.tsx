import { WhyWe } from '../../widgets/WhyWe';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import QuestionList from '../../widgets/QuestionList';

const MainPage = () => {
  return (
    <>
      <Perks />
      <WhyWe />
      <QuestionList />     
      <Footer />
    </>
  );
};

export default MainPage;
