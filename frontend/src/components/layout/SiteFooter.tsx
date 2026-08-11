import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">ASAD KENYA</div>

          <p>
            Together We Grow.
          </p>

          <p className="footer-description">
            Accessible financial solutions focused on
            individuals and communities.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/loan-products">
              Loan Products
            </Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3>Information</h3>

          <div className="footer-links">
            <Link to="/privacy">
              Privacy Notice
            </Link>

            <Link to="/cookies">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} ASAD Kenya Finance.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;