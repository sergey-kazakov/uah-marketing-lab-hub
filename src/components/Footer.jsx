import { uiTexts } from "../i18n/i18n.js";

export default function Footer({ lang }) {
  const t = uiTexts[lang];
  return (
    <footer className="footer">
      <p>{t.footerText}</p>
    </footer>
  );
}
