import { MutationCache, QueryClient } from "@tanstack/react-query";
// import { notify } from "~/components";

// const mutationCache = new MutationCache({
//   onError: (error) => {
//     notify({ type: "error", title: error.name, message: error.message });
//   },
// });

export const queryClient = new QueryClient({
  // mutationCache,
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000,
    },
  },
});
