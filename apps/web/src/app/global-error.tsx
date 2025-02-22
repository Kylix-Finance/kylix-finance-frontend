"use client";

import { ErrorPage } from "~/components/ErrorPage";

export default function NotFound() {
  return (
    <div className="w-screen h-screen">
      <ErrorPage
        code={500}
        title="Internal Server Error"
        description="An unexpected error occurred on our server. Please try again later."
      />
    </div>
  );
}
