import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './style.scss';
import vg from './vg.png';
import gh from './gh.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className='wrapper'>
                    <a href="http://tech.vg.no" alt="VG Tech"><img className={styles.vg} src={vg}/></a>
                    Copyright 2016 - <a href="http://tech.vg.no" alt="VG Tech">Verdens Gang AS</a>
                    <a href="http://github.com/vgno/roc" alt="Github.com Roc"><img className={styles.gh} src={gh}/></a>
                </div>
            </div>
        );
    }
}
