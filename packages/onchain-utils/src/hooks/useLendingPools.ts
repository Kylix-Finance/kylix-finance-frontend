import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

export const useLendingPools = () => {
  const [lendingPools, setLendingPools] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api } = useProvider();

  useEffect(() => {
    // if (!data?.provider) return
    const fetchLendingPools = async () => {
      try {
        setLoading(true);
        // const result = await provider.send('getLendingPools', []);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchLendingPools();
  }, [api]);

  return { lendingPools: [], loading, error };
};
