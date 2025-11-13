import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (password: string) => {
      const res = await fetch("/api/auth/login", {
        body: JSON.stringify({ password }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401) {
        const { message } = await res.json();
        throw new Error(message || "Unauthorized");
      }

      if (!res.ok) {
        throw new Error("Something went wrong during login");
      }
      return true;
    },
  });
};
