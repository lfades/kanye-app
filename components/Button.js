const Button = ({ children, ...props }) => (
  <button {...props}>
    {children}

    <style jsx>{`
      button {
        color: var(--color-2);
        background: var(--color-1);
        text-transform: uppercase;
        cursor: pointer;
        border: 1px solid var(--color-2);
        border-radius: 3px;
        padding: 0.5rem 2rem;
      }
      button:hover {
        color: var(--color-1);
        background: var(--color-2);
        border: 1px solid var(--color-1);
      }
    `}</style>
  </button>
);

export default Button;
