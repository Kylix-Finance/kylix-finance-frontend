import { MutationCache, QueryClient } from "@tanstack/react-query";
import { notify } from "~/components";

const mutationCache = new MutationCache({
  onError: (error) => {
    notify({ type: "error", title: error.name, message: error.message });
  },
});

export const queryClient = new QueryClient({
  mutationCache,
});
