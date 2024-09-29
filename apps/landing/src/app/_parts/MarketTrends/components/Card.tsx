import Image from "next/image";
import Button from "~/components/Button";
import { marketTrends } from "~/data";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
    hidden: { opacity: 1, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
};

interface Props {
    id: number;
}

const Card = ({ id }: Props) => {
    const currentSlide = marketTrends.find((item) => item.id === id);
    if (!currentSlide) return null;



    return (
        <motion.div
            className="flex flex-col md:flex-row gap-16 items-center justify-between"
            key={currentSlide.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col gap-8 order-2 md:order-1">
                <div className="flex flex-col gap-8">
                    {currentSlide.items.map((item, index) => (
                        <div className="flex flex-col gap-1" key={index}>
                            <h3 className="font-bold text-2xl leading-8 text-white">{item.title}</h3>
                            <p className="font-normal text-base leading-6 text-secondary-300">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2.5">
                    <Button onClick={currentSlide.actions.primary.action} variant="primary" color="secondary">
                        {currentSlide.actions.primary.label}
                    </Button>
                    <Button onClick={currentSlide.actions.secondary.action} variant="outline" color="white">
                        {currentSlide.actions.secondary.label}
                    </Button>
                </div>
            </div>
            <div className="relative w-full h-96 order-1">
                <Image fill src={currentSlide.image} alt={currentSlide.label} />
            </div>
        </motion.div>
    );
};

export default Card;
