const Title: React.FC<{
  children: React.ReactNode,
}> = ({
  children
}) => {
  return(<>
    <div className="text-suit-dark max-w-prose font-head text-3xl">
      {children}
    </div>
  </>);
}

export default Title;