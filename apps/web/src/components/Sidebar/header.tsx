import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-full bg-primary-500 flex flex-col justify-center items-center py-10 px-16">
      <Image
        src="kylix-logo.svg"
        alt="kylix-logo"
        width={155}
        height={117}
        draggable="false"
      />
    </div>
  );
};

export default Header;
