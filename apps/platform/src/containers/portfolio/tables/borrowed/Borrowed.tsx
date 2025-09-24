import { UseGetAssetWiseBorrowsCollaterals } from "@repo/onchain";

interface Props {
  data: UseGetAssetWiseBorrowsCollaterals;
  isEmpty: boolean;
  isPending: boolean;
}

const Borrowed = ({ data, isEmpty, isPending }: Props) => {
  return <div>Borrowed</div>;
};

export default Borrowed;
