'use client'
import $ from "jquery";

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

    // console.log(widthGrow.length);

    const viewHeight: number = window.innerHeight;

    const checkItems = () => {
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
          item.classList.add("width-grow-1");
          item.classList.remove("width-grow-0");
        }
      }
    }

    const scrollHandler = (e: Event) => {
      checkItems();
    }
    
    checkItems();
    document.onscroll = scrollHandler;

  }).catch();

  return(<></>);
}

export default ScrollHandler;
