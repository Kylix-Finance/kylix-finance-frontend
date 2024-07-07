interface Props {
  children: React.ReactNode;
}
// act as container
const Parts = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="w-full mt-12 mx-6">{children}</div>
    </div>
  );
};
export default Parts;
