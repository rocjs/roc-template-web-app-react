import React from 'react';

import styles from './style.scss';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node.isRequired
    }

    render() {
        return (
            <div className={styles.main}>
                { this.props.children }
            </div>
        );
    }
}
