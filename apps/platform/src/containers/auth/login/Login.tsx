"use client";
import Background from "~/components/background/Background";
import styles from "./Login.module.scss";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useLogin } from "~/hooks/api/useLogin";
import { notify } from "~/components/ui/alert";
import { useRouter } from "next/navigation";

const Login = () => {
  const [password, setPassword] = useState<string | undefined>(undefined);
  const { mutate, isPending } = useLogin();
  const disabled = !password || password.trim().length < 4;
  const router = useRouter();
  const handleClick = () => {
    if (disabled) return;
    mutate(password, {
      onSuccess: () => {
        router.replace("/");
        notify({
          message: "You have successfully logged in",
          mode: "success",
          title: "Welcome",
        });
      },
      onError: (error) => {
        notify({
          message: error.message,
          mode: "error",
          title: String(error.cause || "Error"),
        });
      },
    });
  };
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.content}>
        <div className={styles.form}>
          <p className={styles.title}>Login</p>
          <Input
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleClick}
            fullWidth
            isLoading={isPending}
            disabled={disabled}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
