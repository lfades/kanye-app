const Card = ({ children }) => (
  <div className="card">
    {children}
    <style jsx>{`
      .card {
        color: var(--color-1);
        padding: 1rem;
        border: 1px solid var(--color-1);
        border-radius: 3px;
      }
    `}</style>
  </div>
);

export default Card;
