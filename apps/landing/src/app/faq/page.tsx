import Header from "./_parts/Header";
import Section from "./_parts/Section";

const Page = () => {
  return (
    <div>
      <Header />
      <div className="p-5 lg:p-28">
        <Section heading="Basics" data={[]} />
      </div>
    </div>
  );
};

export default Page;
