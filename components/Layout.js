import Head from 'next/head';

const Layout = ({ children }) => (
  <div className="dark-theme">
    <Head>
      <title>Kanye Next</title>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="container">{children}</div>

    <style jsx global>{`
      .dark-theme {
        --color-1: #ffffff;
        --color-2: #000000;
        --color-3: #999999;
      }
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      body {
        font-family: 'IBM Plex Sans', sans-serif;
        background: #000;
      }
      html {
        font-size: 62.5%; /* 10px */
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns:
          [full-start] 1fr
          [center-start] minmax(min-content, 67rem)
          [center-end] 1fr
          [full-end];
        height: 100%;
      }
    `}</style>
  </div>
);

export default Layout;
