'use client'

import $ from "jquery";
import { gtagEvent } from '@/app/lib/googleAnalytics/helpers';
import { isClient } from "@/app/static";


//wait until cursor is loaded
if(isClient()){
  new Promise<JQuery<HTMLElement>>((resolve, reject) => {
    const checkForCursor = () => {
      var cursor = $('#cursor');
      if (cursor.length > 0) {
        resolve(cursor);
      } else if (attempts < 20) { // Limit the number of attempts to prevent infinite loop
        attempts++;
        setTimeout(checkForCursor, 200);
      } else {
        reject(new Error(`Element with #cursor not found.`));
      }
    };
  
    let attempts = 0;
    checkForCursor();
  
  }).then((cursor) => {
    gtagEvent({ action:'loaded', category:'cursor', label:'good' })
    const positionCursor = (e: any)=> {
      cursor.css('left', e.clientX + 'px');
      cursor.css('top', (e.clientY + window.scrollY) + 'px');
    }
    const hideInScrollbar = (e: any)=> {
      if(e.clientX >= document.body.clientWidth){
        hideCursor(e);
      }else if(e.clientX < document.body.clientWidth){
        showCursor(e) ;
      }
    }
    
    window.addEventListener('wheel', positionCursor) ;
    window.addEventListener('scroll', positionCursor) ;
    window.addEventListener('mousemove', positionCursor) ;
    window.addEventListener('mousemove', hideInScrollbar) ;
    window.addEventListener('mousedown', shrinkCursor) ;
    window.addEventListener('mouseup', growCursor) ;
    $(document).on('mouseleave', hideCursor) ;
    $(document).on('mouseenter', showCursor) ;
  
  }).catch();
}



export const shrinkCursor = (e: any)=> {
  $('#cursor').addClass('small-cursor');
}
export const growCursor = (e: any)=> {
  $('#cursor').removeClass('small-cursor');
}
export const hideCursor = (e: any)=> {
  $('#cursor').addClass('hidden-cursor');
}
export const showCursor = (e: any)=> {
  $('#cursor').removeClass('hidden-cursor');
}
