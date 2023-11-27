import './style.css'
import { shrinkCursor, growCursor } from 'components/CursorMod/helpers';

const Frame: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <div className="flex flex-col space-y-2 text-large text-suit-dark font-body max-w-prose">
            {children}
         </div>
      </>);
   }

const Greeting: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <p className="">
            {children}
         </p>
      </>);
   }

const P: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <p className="indent-4 text-justify hyphens-auto">
            {children}
         </p>
      </>);
   }

const Closing: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <p className=''>
            {children}
         </p>
      </>);
   }


const Link: React.FC<{
   children: React.ReactNode,
   noP?: boolean
   href: string,
}> = ({
   children,
   noP = false,
   href,
}) => {

      return (<>
         <a href={href} target="_blank" className='cursor-none'>
            {noP ?
               <span className="font-medium left-underline" onMouseOver={shrinkCursor} onMouseOut={growCursor}>
                  {children}
               </span>
               :
               <p className="font-medium left-underline" onMouseOver={shrinkCursor} onMouseOut={growCursor}>
                  {children}
               </p>
            }
         </a>
      </>);
   }

const Text = { Frame, Greeting, P, Closing, Link }
export default Text;