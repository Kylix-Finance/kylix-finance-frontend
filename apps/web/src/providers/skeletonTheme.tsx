import { SkeletonTheme as Theme } from "react-loading-skeleton";

interface Props {
  children: React.ReactNode;
}
const SkeletonTheme = ({ children }: Props) => {
  return (
    <Theme baseColor="#0a1526" highlightColor="#0d1a2f" duration={2}>
      {children}
    </Theme>
  );
};

export default SkeletonTheme;
