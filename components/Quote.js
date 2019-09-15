import Button from './Button';

const Quote = ({ text, helpText, onClick }) => (
  <div className="quote">
    <p className="quote-text">{text}</p>
    <div className="footer">
      <p>{helpText}</p>
      <Button type="button" onClick={onClick}>
        Refresh
      </Button>
    </div>

    <style jsx>{`
      .quote {
        border-radius: 3px;
      }
      .quote-text {
        font-size: 1.7rem;
        padding: 2rem 1rem;
      }
      .footer {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr min-content;
        padding: 2rem 1rem;
        border-top: 1px solid var(--color-1);
      }
      .footer p {
        color: var(--color-3);
        font-size: 1.6rem;
      }
    `}</style>
  </div>
);

export default Quote;
