const Content = ({ children }) => (
  <div className="content">
    {children}

    <style jsx>{`
      .content {
        grid-column: center-start / center-end;
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 2rem;
        padding: 3rem 1rem;
      }
    `}</style>
  </div>
);

export default Content;
