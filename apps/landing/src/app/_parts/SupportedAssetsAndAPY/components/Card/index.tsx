import Image from "next/image";
import { Asset } from "~/types";

const Card = ({ alt, isLaunched, src }: Asset) => {
  return (
    <div className="p-0.5 bg-gradient-to-br from-white/20 via-transparent rounded-md ">
      <div className="flex items-center flex-col justify-center p-9 rounded-md backdrop-blur-3xl bg-gradient-to-tl from-white/5 to-transparent aspect-square relative">
        <Image src={src} alt={alt} width={140} height={140} draggable="false" />
        {!isLaunched && (
          <p className="text-white absolute bottom-9 md:bottom-[30px] text-xs">
            (Coming soon)
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
