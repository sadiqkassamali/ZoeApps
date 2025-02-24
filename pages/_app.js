import "../styles/global.css"; // ✅ Ensures styles are loaded across all pages

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
