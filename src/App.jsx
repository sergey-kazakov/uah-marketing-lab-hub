import { useState, useMemo, useRef } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import AppCard from "./components/AppCard.jsx";
import { apps } from "./data/apps.js";
import { getInitialLang, uiTexts } from "./i18n/i18n.js";

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [category, setCategory] = useState("all");

  const t = uiTexts[lang];
  
  const manualUrl = "https://uah-marketing-lab-docs.netlify.app/es/intro"; // как у тебя сейчас
  
  const contactRef = useRef(null);
  
  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredApps = useMemo(() => {
    if (category === "all") return apps;
    return apps.filter((a) => a.categories.includes(category));
  }, [category]);
  
  return (
    <div className="app-shell">
      <Header lang={lang} setLang={setLang} />

      <main className="main">
        <section className="hero">
          <p className="hero-text">{t.heroDescription}</p>
          <div className="hero-actions">
            <button
              className="btn-secondary"
              onClick={() => window.open(manualUrl, "_blank")}
            >
              {t.viewManual}
            </button>
          
            <button
              className="btn-ghost"
              onClick={handleContactClick}>          
              {t.contact}
            </button>
          </div>
        </section>

        <CategoryFilter
          lang={lang}
          category={category}
          setCategory={setCategory}
        />

        <section className="cards-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} lang={lang} />
          ))}
        </section>
      </main>
        <section
            ref={contactRef}
            className="contact-section"
            id="contact"
          >
            <h2 className="contact-title">{t.contactSectionTitle}</h2>
            <p className="contact-subtitle">{t.contactSectionSubtitle}</p>
        
            <div className="contact-grid">
              <article className="contact-card">
                <h3>Pedro Cuesta Valiño</h3>
                <p>Catedrático de Universidad</p>
                <p>Facultad de Ciencias Económicas, Empresariales y Turismo</p>
                <p>Departamento de Economía y Dirección de Empresas</p>
                <a href="mailto:pedro.cuesta@uah.es">
                  pedro.cuesta@uah.es
                </a>
              </article>
              
              <article className="contact-card">
                <h3>Sergey Kazakov</h3>
                <p>Profesor Ayudante Doctor, PhD, D.E.N., C.E.N.</p>
                <p>Facultad de Ciencias Económicas, Empresariales y Turismo</p>
                <p>Departamento de Economía y Dirección de Empresas</p>
                <a href="mailto:sergey.kazakov@uah.es">
                  sergey.kazakov@uah.es
                </a>
              </article>              
            </div>
          </section>      
      <Footer lang={lang} />
    </div>
  );
}
