"use client";

import { ErrorPage } from "~/components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code={500}
      title="Page Not Found"
      description="A server error occurred. Please try again later."
    />
  );
}
