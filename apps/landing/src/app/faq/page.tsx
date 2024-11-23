import { faqData } from "~/data/faq";
import Header from "./_parts/Header";
import Section from "./_parts/Section";

const Page = () => {
  return (
    <div className="pt-32">
      <Header />
      <div className="p-5 lg:p-28 flex-col flex gap-4 lg:gap-10">
        {faqData.map((item, index) => (
          <Section heading={item.heading} data={item.data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
