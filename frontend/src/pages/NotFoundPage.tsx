import { Link } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";

function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="not-found-section">
        <div className="container not-found-content">
          <span className="not-found-code">
            404
          </span>

          <h1>
            Page not found
          </h1>

          <p>
            The page you are looking for does not
            exist or may have moved.
          </p>

          <Link
            to="/"
            className="button button-primary"
          >
            Return Home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export default NotFoundPage;