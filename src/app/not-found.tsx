export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">
        404 — Page Not Found
      </h1>
      <p className="text-text-secondary text-base md:text-lg max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}
