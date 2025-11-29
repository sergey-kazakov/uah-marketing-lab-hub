import { uiTexts } from "../i18n/i18n.js";

export default function AppCard({ app, lang }) {
  const t = uiTexts[lang];

  const statusLabel =
    app.status === "ready"
      ? t.status.ready
      : app.status === "dev"
      ? t.status.dev
      : t.status.idea;

  const canOpen = Boolean(app.url);

  return (
    <article className="app-card">
      <div className="app-card-header">
        <h3>{app.title[lang]}</h3>
        <span className={`status status-${app.status}`}>{statusLabel}</span>
      </div>
      <p className="app-desc">{app.description[lang]}</p>
      <div className="app-actions">
        {canOpen ? (
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.openApp}
          </a>
        ) : (
          <button className="btn-disabled" disabled>
            {t.comingSoon}
          </button>
        )}
      </div>
    </article>
  );
}
