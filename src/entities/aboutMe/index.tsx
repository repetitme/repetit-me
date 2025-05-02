import { useState } from "react";
import { IAboutMe } from "./type";

import { CardContainer } from "./components/cardContainer/index.tsx"
import { TextContent } from "./components/textContent/index.tsx"
import { ServicesList } from "./components/servicesList/index.tsx"

export const AboutMe: React.FC<IAboutMe> = ({ textContent, servicesList }) => {
  const [aboutMeHidden, setAboutMeHidden] = useState(true);
  const [listHidden, setListHidden] = useState(true);

  const toggleAboutMeVisibility = () => setAboutMeHidden(!aboutMeHidden);
  const toggleListVisibility = () => setListHidden(!listHidden);

  return (
    <>
      <CardContainer 
        title="Обо мне" 
        isHidden={aboutMeHidden} 
        toggleVisibility={toggleAboutMeVisibility}
        hiddenClassName={'container__content_text_hidden'}
        buttonText="Читать дальше"
      >
        <TextContent content={textContent} />
      </CardContainer>

      <CardContainer 
        title="Услуги и цены" 
        isHidden={listHidden} 
        toggleVisibility={toggleListVisibility}
        hiddenClassName={'container__content_list_hidden'}
        buttonText="Развернуть"
      >
        <ServicesList services={servicesList} />
      </CardContainer>
    </>
  );
};