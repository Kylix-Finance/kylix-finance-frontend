import { ErrorPage } from "~/components/ErrorPage";

export default function NotFound() {
  return (
    <div className="w-screen h-screen">
      <ErrorPage
        code={404}
        description="Sorry, we couldn’t find the page you’re looking for."
        title="Page Not Found"
      />
    </div>
  );
}
