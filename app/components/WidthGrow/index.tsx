'use client'

import './style.css';
import './helpers';

const WidthGrow: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    {/* <div className='flex flex-row-reverse'> */}
    <div className='w-full h-full'>
      <div className="width-grow-0 overflow-hidden h-full">
          {children}
        </div>
    </div>
  </>);
}

export default WidthGrow;