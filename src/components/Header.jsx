import { LANGS, uiTexts } from "../i18n/i18n.js";

export default function Header({ lang, setLang }) {
  const t = uiTexts[lang];

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">UAH</div>
        <div className="headline">
          <div className="title">{t.title}</div>
          <div className="subtitle">{t.subtitle}</div>
        </div>
      </div>
      <div className="header-right">
        <button
          className={`lang-btn ${lang === LANGS.ES ? "active" : ""}`}
          onClick={() => {
            setLang(LANGS.ES);
            window.localStorage.setItem("uah_lab_lang", LANGS.ES);
          }}
        >
          ES
        </button>
        <button
          className={`lang-btn ${lang === LANGS.EN ? "active" : ""}`}
          onClick={() => {
            setLang(LANGS.EN);
            window.localStorage.setItem("uah_lab_lang", LANGS.EN);
          }}
        >
          EN
        </button>
      </div>
    </header>
  );
}
