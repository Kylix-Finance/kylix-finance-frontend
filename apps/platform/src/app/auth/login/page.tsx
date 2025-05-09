import { notFound } from "next/navigation";
import { ENV } from "~/config/env";
import Login from "~/containers/auth/login";

export default function LoginPage() {
  if (!ENV.IS_PRODUCTION) {
    return notFound();
  }
  return <Login />;
}
