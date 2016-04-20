import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { click } from '../../redux/clicker';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    clicker: state.clicker,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ click }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Clicker extends React.Component {
  static propTypes = {
    clicker: React.PropTypes.number.isRequired,
    click: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={styles.main}>
        <span className={styles.clicker}>{ this.props.clicker } +</span>
        <input className={styles.input} ref="incInput" type="text" defaultValue="1" />

        <button onClick={ () => {
          const inputValue = this.refs.incInput.value.trim();
          this.props.click(parseInt(inputValue, 10));
        }}
        >
          Modify the counter!
        </button>
      </div>
    );
  }
}
