'use client'

import { gtagEvent } from "@/app/lib/googleAnalytics/helpers";
import $ from "jquery";



const viewHeight: number = window.innerHeight;

const checkItems = (widthGrow: Element[]) => {
  for(let i = 0; i < widthGrow.length; i++){
    var currItem = widthGrow[i];
    if(currItem){
      checkItem(currItem);
    }
  }
}

const checkItem = (item: Element) => {
  if(item){
    var itemTop = item.getBoundingClientRect().top;
    if ( itemTop > 0 && itemTop < viewHeight){
      // item.classList.add("width-grow-1");
      // item.classList.remove("width-grow-0");
    }
  }
}

const scrollHandler = (widthGrow:Element[]) => {
  checkItems(widthGrow);
}




const ScrollHandler: React.FC<{
  mainId: string,
}> = ({
  mainId,
}) => {
  //wait until new compo is loaded
  new Promise<JQuery<HTMLElement>>((resolve, reject) => {
    const checkForMainEl = () => {
      var mainEl = $('main#'+mainId);
      if (mainEl.length > 0) {
        resolve(mainEl);
      } else if (attempts < 10) { // Limit the number of attempts to prevent infinite loop
        attempts++;
        setTimeout(checkForMainEl, 300);
      } else {
        reject(new Error(`Element with ID ${mainId} not found.`));
      }
    };

    let attempts = 0;
    checkForMainEl();

  }).then((mainEl) => {
    let widthGrow:Element[] = Array.from(mainEl.find('.width-grow-0'));
    gtagEvent({ action:'found',category:'width_grow',label:'count',value:widthGrow.length });

    
    checkItems(widthGrow);
    $(document).on('scroll', () => scrollHandler(widthGrow)) ;

  }).catch(() => {
    gtagEvent({ action:'found', category:'error', label:`main #${mainId} not_found` })
    console.log('main not found. quering whole document instead');
    let widthGrow:Element[] = Array.from($(document).find('.width-grow-0'));
    gtagEvent({ action:'found',category:'width_grow',label:'count',value:widthGrow.length });
    checkItems(widthGrow);
    $(document).on('scroll', () => scrollHandler(widthGrow)) ;
  });

  return(<></>);
}

export default ScrollHandler;
