const Hr: React.FC<{
  className?: string,
}> = ({
  className = '',
}) => {
  return(<>
    <div className={className +" h-[1px] bg-suit-light rounded-lg"} />
  </>);
}
export default Hr;