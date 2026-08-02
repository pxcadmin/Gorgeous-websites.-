import { Link } from "react-router-dom";
import { Button } from "./Button";
import { contactEmail, contactPhone } from "../data/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand">
            <b>PXC</b>
            <span>
              Patient eXperience
              <br />
              Consulting®
            </span>
          </div>
          <p className="muted">
            Fix the inside of your practice first so the experience outside
            becomes unforgettable.
          </p>
          <Button>Book Your Strategy Call</Button>
          <div className="footer-contact">
            <a href={`tel:${contactPhone.replace(/\D/g, "")}`}>
              {contactPhone}
            </a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
        <div className="footer-links">
          {[
            ["Company", ["/about-jennifer-radu", "/results", "/contact"]],
            ["Offers", ["/services", "/ai-blueprint-day", "/shop"]],
            [
              "Frameworks",
              [
                "/services/practice-clarity-assessment",
                "/services/impact-blueprint",
                "/services/excel-transformation",
              ],
            ],
            ["Legal", ["/newsletter", "/contact"]],
          ].map(([label, links]) => (
            <div key={label as string}>
              <b>{label as string}</b>
              {(links as string[]).map((link) => (
                <Link key={link} to={link}>
                  {link.split("/").pop()?.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Patient eXperience Consulting®. Florida's
        AI-Fueled Healthcare Authority.
      </div>
    </footer>
  );
}
