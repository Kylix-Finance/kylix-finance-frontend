interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <p className="text-lg font-bold leading-5 tracking-[-2%] text-[#1A433B capitalize font-body">
      {heading}
    </p>
  );
};

export default Heading;
