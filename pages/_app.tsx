import '../styles/globals.css';
import '../components/navbar/navbar.scss';
import '../components/header/header.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
