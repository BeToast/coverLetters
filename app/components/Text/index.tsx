const Frame: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="text-suit-dark font-body max-w-prose">
      {children}
    </div>
  </>);
}
const P: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <p>
      {children}
    </p>
  </>);
}

const Text = { Frame, P }
export default Text;