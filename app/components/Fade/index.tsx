import './style.css'

const In: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="fade-in">
      {children}
    </div>
  </>);
}

const Out: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="fade-in">
      {children}
    </div>
  </>);
}

const Fade = { In, Out, }
export default Fade;