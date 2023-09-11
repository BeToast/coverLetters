import './style.css'

const Frame: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
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
  return(<>
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
  return(<>
    <p className="indent-4">
      {children}
    </p>
  </>);
}

const Closing: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
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
  return(<>
    <a href={href} target="_blank">
      {noP ? 
        <span className="left-underline">
          {children}
        </span>
        :
        <p className="left-underline">
          {children}
        </p>
      }
    </a>
  </>);
}

const Text = { Frame, Greeting, P, Closing, Link }
export default Text;