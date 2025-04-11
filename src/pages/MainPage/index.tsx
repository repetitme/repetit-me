import { useState } from 'react';
import MainBlock from '../../widgets/MainBlock';
import { WhyWe } from '../../widgets/WhyWe';
import { Chat } from '../../widgets/Chat';
import Footer from '../../widgets/Footer';
import { Perks } from '../../widgets/Perks';
import Advantages from '../../widgets/Advantages';
import QuestionList from '../../widgets/QuestionList';
import TutorFormBlock from '../../widgets/TutorFormBlock';
import Recruiting from '../../widgets/Recruiting';

import Header from '../../widgets/Header';

const MainPage = () => {
  const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <>
      <Header auth={auth} />
      <MainBlock />
      <Perks />
      <WhyWe />
      <Chat />
      <Recruiting />
      <TutorFormBlock />
      <Advantages />
      <QuestionList />
      <Footer />
    </>
  );
};
export default MainPage;
