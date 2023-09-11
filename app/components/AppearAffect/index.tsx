'use client'

import Fade from "components/Fade";
import WidthGrow from "components/WidthGrow";
import { useEffect, useState } from "react";

const pc = 956;
// const client = (typeof window === "undefined" ? false : true);


const AppearAffect: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return(<>
  {(isClient ? 
    (window.innerWidth > pc 
    ?
      <WidthGrow>
        {children}
      </WidthGrow>
    :
      <Fade.In>
        {children}
      </Fade.In>
    )
  :
    <WidthGrow>
      {children}
    </WidthGrow>
  )}
  </>);
}

export default AppearAffect;