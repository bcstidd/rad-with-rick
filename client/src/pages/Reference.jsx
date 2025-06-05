import { useState } from 'react';
import reference from '../data/reference';

export default function Reference() {
  const [query, setQuery] = useState('');
  const [openCategory, setOpenCategory] = useState(null);

  const filtered = reference.filter((item) =>
    item.term.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="container">
      <h2>Reference Guide</h2>
      <input
        type="text"
        placeholder="Search terms..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="accordion-section">
          <div className="accordion-header" onClick={() => toggleCategory(category)}>
            <h3>{category}</h3>
            <span className="chevron">{openCategory === category ? '▲' : '▼'}</span>
          </div>
          <div
            className="accordion-content"
            style={{ display: openCategory === category ? 'block' : 'none' }}
          >
            <ul className="reference-list">
              {items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.term}</strong>: {item.definition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
