import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDogs } from "../actions/dogAction";
import Dog from "../components/Dog";
import AllDogs from "../components/AllDogs";
class AllDogsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDogs();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={(props) => <AllDogs {...props} dogs={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs/:id"
            render={(props) => <Dog {...props} dogs={this.props.dogs} />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { dogs: state.dogs };
};
export default connect(mapStateToProps, { fetchDogs })(AllDogsContainer);