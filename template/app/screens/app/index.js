import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

const App = ({ children }) => (
  <div className={styles.main}>
    <Helmet
      link={[{
        rel: 'icon', href: '/favicon.png',
      }, {
        href: 'http://fonts.googleapis.com/css?family=Lato:100,300,400,600,700,800',
        rel: 'stylesheet',
        type: 'text/css',
      }, {
        href: 'http://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700',
        rel: 'stylesheet',
        type: 'text/css',
      }]}
    />
    <Navbar />
    { children }
    <Footer />
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
