interface Props {
  heading: string;
  data: any[];
}

const Section = ({ heading }: Props) => {
  return (
    <div className="min-w-0 w-full relative rounded-xl lg:rounded-3xl bg-gradient-to-br from-white/20 via-transparent border border-primary-500/30">
      <div
        className="absolute inset-0  rounded-xl lg:rounded-3xl"
        style={{
          background: `radial-gradient(circle at top left, #56DDB490 0%, rgba(17, 23, 61, 0) 20%)`,
        }}
      />
      <div className="flex flex-col gap-20 bg-secondary-500 p-7  rounded-xl lg:rounded-3xl">
        <h3 className="font-heading font-bold text-2xl lg:text-4xl leading-5 text-white relative z-10">
          {heading}
        </h3>
        <div className="flex flex-col gap-2.5"></div>
      </div>
    </div>
  );
};

export default Section;
