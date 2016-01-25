import React from 'react';
import styles from './style.scss';

export default class About extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className="header">
                    <h1>About</h1>
                    <h2>roc-web-react</h2>
                </div>
                <div className="wrapper">
                    <h4>Roc is an open source project by VG.</h4>
                    It allows you to create consistent developer experiences for your teams within the node and npm ecosystem. One of the primary goals is to avoid boilerplate fragmentations across projects. You are currently in a project powered by the <a href="https://github.com/vgno/roc-web-react" alt="Github.com Roc Web React">roc-web-react</a> extension.<br/>
                    The project itself is not React-centric, but this is the extension set we are currently focusing on.

                    <h4>Contribute</h4>
                    If you use the project and have ideas (or code) that will help us improve, please contact us on <a href="https://github.com/vgno/roc" alt="Github.com Roc">Github</a>.
                </div>
            </div>
        );
    }
}
