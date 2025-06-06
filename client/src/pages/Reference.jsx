import { useState, useEffect } from 'react';
import reference from '../data/reference';
import './Reference.css';

export default function Reference() {
  const [query, setQuery] = useState('');
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    // Hide the footer when the reference page is loaded
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }

    // Show the footer again when the component is unmounted
    return () => {
      if (footer) {
        footer.style.display = '';
      }
    };
  }, []);

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
    <div className="container reference-page">
      <h2>Reference Guide</h2>
      <input
        type="text"
        placeholder="Search terms..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />

      <div className="accordion-grid">
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
    </div>
  );
}
