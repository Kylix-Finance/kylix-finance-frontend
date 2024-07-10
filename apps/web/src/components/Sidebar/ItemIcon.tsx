import { cn } from "~/utils";

interface ItemIconProps {
  Icon: React.ElementType | undefined;
  isCurrentPath: boolean;
}
const ItemIcon = ({ Icon, isCurrentPath }: ItemIconProps) => {
  if (!Icon) return null;
  return (
    <Icon
      className={cn("w-5 h-5 text-primary-500", {
        "text-white": isCurrentPath,
      })}
    />
  );
};

export default ItemIcon;
