import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reducer } from '../../redux/clicker';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    clicker: state.clicker,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reducer }, dispatch);
}

export class Clicker extends React.Component {
  static propTypes = {
    clicker: React.PropTypes.number.isRequired,
    reducer: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired,
  }
  static defaultProps= {
    onClick: () => {
      const inputValue = this.refs.incInput.value.trim();
      this.props.reducer(parseInt(inputValue, 10));
    },
  }
  render() {
    return (
      <div className={styles.main}>
        <span className={styles.clicker}>{ this.props.clicker } +</span>
        <input className={styles.input} ref="incInput" type="text" defaultValue="1" />
        <button onClick= {this.props.onClick}>
          Modify the counter!
        </button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
