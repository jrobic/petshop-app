/* eslint react/prefer-stateless-function: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="mdl-layout__container">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-color--grey-100">
          <Header loading={loading} />
          <main className="mdl-layout__content">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.requestCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
