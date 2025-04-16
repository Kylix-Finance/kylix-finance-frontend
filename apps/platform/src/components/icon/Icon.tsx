import dynamic from "next/dynamic";
import { Icon as IconType } from "~/types";

interface Props {
  icon: IconType;
}

const Icon = ({ icon }: Props) => {
  const IconComponent = dynamic(
    () => import(`~/assets/icons/${icon}/${icon}.svg`),
    {
      ssr: false,
    }
  );

  return <IconComponent />;
};

export default Icon;
