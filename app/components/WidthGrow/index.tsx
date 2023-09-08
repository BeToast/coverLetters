'use client'

import './style.css';

const WidthGrow: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    {/* <div className='flex flex-row-reverse'> */}
    <div className='w-full '>
      <div className="width-grow-0 overflow-hidden">
          {children}
        </div>
    </div>
  </>);
}

export default WidthGrow;