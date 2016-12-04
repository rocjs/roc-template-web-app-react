import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import logo from './roc.png';
import styles from './style.scss';

export default () =>
   (
     <div className={styles.header}>
       <ul className={styles.menu}>
         <li>
           <IndexLink
             to="/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Start
           </IndexLink>
         </li>
         {{#if_eq fetchExample true}}
         <li>
           <Link
             to="/fetching/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Data-fetch
           </Link>
         </li>
         {{/if_eq}}
         {{#if_eq reduxExample true}}
         <li>
           <Link
             to="/redux/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Redux
           </Link>
         </li>
         {{/if_eq}}
       </ul>
       <img className={styles.logo} src={logo} alt="Logo" />
     </div>
  )
;
