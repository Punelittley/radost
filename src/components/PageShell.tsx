import { type ReactNode } from "react";
import { Link } from "react-router";
import logoImage from "../assets/radost-logo.png";
import SiteHeader from "./SiteHeader";

export default function PageShell({ children }: { children: ReactNode }) {

  return (
    <main className="inner-page">
      <SiteHeader />
      {children}
      <footer className="page-footer">
        <img src={logoImage} alt="Радость" />
        <p>Массаж, который возвращает к себе</p>
        <div>
          <Link to="/contacts">Контакты</Link>
        </div>
      </footer>
    </main>
  );
}
