import Image from "next/image";
import Button from "~/components/Button";
import { marketTrendsData } from "~/data";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

interface Props {
  id: number;
}

const Card = ({ id }: Props) => {
  const currentSlide = marketTrendsData.items.find((item) => item.id === id);
  if (!currentSlide) return null;

  return (
    <motion.div
      key={currentSlide.id}
      animate="visible"
      className="flex flex-col md:flex-row gap-16 items-center justify-between"
      exit="exit"
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      <div className="flex flex-col gap-8 order-2 md:order-1">
        <div className="flex flex-col gap-8">
          {currentSlide.items.map((item, index) => (
            <div key={item.title + index} className="flex flex-col gap-1">
              <h3 className="font-bold text-2xl leading-8 text-white">
                {item.title}
              </h3>
              <p className="font-normal text-base leading-6 text-secondary-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          {currentSlide?.actions?.primary && (
            <Button
              color="secondary"
              variant="primary"
              onClick={currentSlide.actions.primary.action}
            >
              {currentSlide.actions.primary.label}
            </Button>
          )}
          {currentSlide.actions?.secondary && (
            <Button
              color="white"
              variant="outline"
              onClick={currentSlide.actions.secondary.action}
            >
              {currentSlide.actions.secondary.label}
            </Button>
          )}
        </div>
      </div>
      <div className="relative w-full order-1">
        <Image
          alt={currentSlide.label}
          className="ml-auto"
          height={384}
          src={currentSlide.image}
          width={644}
        />
      </div>
    </motion.div>
  );
};

export default Card;
