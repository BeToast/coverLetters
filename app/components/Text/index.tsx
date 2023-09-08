const Frame: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="flex flex-col space-y-1 text-large text-suit-dark font-body max-w-prose">
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
    <p className="indent-4">
      {children}
    </p>
  </>);
}

const Text = { Frame, P }
export default Text;