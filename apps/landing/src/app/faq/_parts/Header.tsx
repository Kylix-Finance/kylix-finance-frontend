import { Discord } from "~/assets/svgs";
import Button from "~/components/Button";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
        <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2.5 font-bold font-heading w-full h-full text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-primary-500">Frequently</span>
          <span className="text-white">Asked Questions</span>
        </h2>

        <p className="font-light text-xs md:text-sm lg:text-base leading-6 text-secondary-100 text-center">
          A visual breakdown of the lending and borrowing process, typically
          simplified into steps like:
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <Button
          variant="primary"
          color="secondary"
          className="text-sm font-semibold"
        >
          Ask a QUestion
        </Button>
        <Button
          variant="outline"
          color="white"
          className="flex items-center text-sm font-semibold gap-2"
        >
          <Discord /> <span>Join Our Discord </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
