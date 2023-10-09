import $ from 'jquery';

import { gtagEvent } from 'lib/googleAnalytics/helpers';
import { useEffect } from 'react';

const widthGrowFallback = () => {
  const widthGrow:Element[] = Array.from($(document).find('.width-grow-0'));
  for(let i = 0; i < widthGrow.length; i++){
    var currItem = widthGrow[i];
    if(currItem){
      currItem.classList.add("width-grow-1");
      currItem.classList.remove("width-grow-0");
    }
  }

  gtagEvent({ action:'widthGrowFallback',category:'width_grow',label:'count',value:widthGrow.length });
};


//widthGrowFallback if client rendered
if(isClient()){
  setTimeout(widthGrowFallback, 1500);
}

function isClient() {
  return typeof window != 'undefined' && window.document;
}
