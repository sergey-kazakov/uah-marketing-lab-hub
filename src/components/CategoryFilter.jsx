import { uiTexts } from "../i18n/i18n.js";

export default function CategoryFilter({ lang, category, setCategory }) {
  const t = uiTexts[lang];

  const cats = [
    { id: "all", label: t.category.all },
    { id: "fundamentos", label: t.category.fundamentos },
    { id: "estrategias", label: t.category.estrategias },
    { id: "servicios", label: t.category.servicios },
    { id: "internacional", label: t.category.internacional },
    { id: "distribucion", label: t.category.distribucion },
    { id: "investigacion", label: t.category.investigacion },
    { id: "turistico", label: t.category.turistico },
  ];

  return (
    <div className="category-filter">
      {cats.map((c) => (
        <button
          key={c.id}
          className={`cat-btn ${category === c.id ? "active" : ""}`}
          onClick={() => setCategory(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
