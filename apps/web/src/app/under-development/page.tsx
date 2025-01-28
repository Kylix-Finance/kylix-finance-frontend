import { ErrorPage } from "~/components/ErrorPage";

export default function Page() {
  return (
    <ErrorPage
      code={404}
      description=" The requested page may have moved or been archived. Your assets
              and data remain secure."
      title="Under Development"
    />
  );
}
