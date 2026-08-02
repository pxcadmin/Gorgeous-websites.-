import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { Offer } from "../types";
import type { CSSProperties } from "react";
export function OfferCard({ offer }: { offer: Offer; key?: string }) {
  return (
    <article
      className="offer-card"
      style={{ "--offer-accent": offer.accent } as CSSProperties}
    >
      <div>
        <span className="offer-accent-bar" />
        <h3>{offer.name}</h3>
        {offer.summary && <p className="offer-summary">{offer.summary}</p>}
        <p className="offer-best">
          <b>Best for:</b> {offer.best}
        </p>
        <b className="offer-includes">What it includes</b>
        <ul>
          {offer.includes.map((item) => (
            <li key={item}>
              <Check size={15} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="offer-footer">
        <strong>{offer.price}</strong>
        <Link to={offer.to}>
          Explore offer <span>→</span>
        </Link>
      </div>
    </article>
  );
}
