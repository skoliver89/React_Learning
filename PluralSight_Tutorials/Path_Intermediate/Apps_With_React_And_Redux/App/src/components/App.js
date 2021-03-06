import React, { Component, PropTypes } from "react";
import Header from "./common/Header";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        <br />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.apiCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
