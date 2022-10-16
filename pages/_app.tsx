import type { AppProps } from 'next/app';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faMobile, faEnvelopeOpen, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false
library.add(faMobile, faEnvelopeOpen, faLink, faGithub, faLinkedin);

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default App;
