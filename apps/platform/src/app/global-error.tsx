"use client";

import Error from "~/components/error";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Error
        code="500"
        title={error.name || (error.cause as string) || "Unexpected Error"}
        description={
          error.message ||
          "Our engineers have been notified. Try again in a moment."
        }
      />
    </div>
  );
}
