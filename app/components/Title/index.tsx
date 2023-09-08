const Title: React.FC<{
  children: React.ReactNode,
}> = ({
  children
}) => {
  return(<>
    <div className="text-black max-w-prose font-head text-xl">
      {children}
    </div>
  </>);
}

export default Title;