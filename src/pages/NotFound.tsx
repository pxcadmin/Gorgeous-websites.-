import { PageShell } from "../components/PageShell";
export function NotFound() {
  return (
    <PageShell
      title="Page Not Found | PXC"
      description="The page you are looking for is not here."
      heading="This page took a wrong turn."
    >
      <p className="section-intro">
        The practice clarity path is still here. Let’s get you back to the next
        right move.
      </p>
    </PageShell>
  );
}
