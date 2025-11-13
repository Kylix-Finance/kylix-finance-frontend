import Error from "~/components/error";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Error
        code="404"
        title="Page not found"
        description="We're sorry, the page you are looking for was not found. You can return to the home page."
      />
    </div>
  );
}
