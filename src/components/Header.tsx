import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation } from "../data/site";
import { Button } from "./Button";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <b>PXC</b>
        <span>
          Patient eXperience
          <br />
          Consulting®
        </span>
      </Link>
      <nav className={open ? "site-nav is-open" : "site-nav"}>
        {navigation.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Button>Book Your Strategy Call</Button>
      </nav>
      <button
        className="menu-toggle"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
