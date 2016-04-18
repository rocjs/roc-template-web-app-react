import React from 'react';
import styles from './style.scss';
import vg from './vg.png';
import gh from './gh.png';

export default () => (
  <div className={styles.footer}>
    <div className="wrapper">
      <a href="http://tech.vg.no" alt="VG Tech"><img className={styles.vg} src={vg} /></a>
      <a href="http://github.com/rocjs/roc" alt="Github.com Roc"><img className={styles.gh} src={gh} /></a>
    </div>
  </div>
);
