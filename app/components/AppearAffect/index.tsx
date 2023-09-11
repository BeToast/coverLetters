'use client'

import Fade from "components/Fade";
import WidthGrow from "components/WidthGrow";

// import config from '@/tailwind.config'
// const screens = config.theme?.screens;

const pc = 956;

const AppearAffect: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
  {(window.innerWidth > pc 
  ?
    <WidthGrow>
      {children}
    </WidthGrow>
  :
    <Fade.In>
      {children}
    </Fade.In>
  )}
    
  </>);
}

export default AppearAffect;