import reference from '../data/reference';
import '../pages/Reference.css'

export default function Reference() {
  return (
    <div className="container">
      <h2>Reference Guide</h2>
      <ul className="reference-list">
        {reference.map((item, idx) => (
          <li key={idx}>
            <strong>{item.term}</strong>: {item.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}
