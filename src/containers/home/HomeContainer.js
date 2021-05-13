import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshAuthToken, checkUserType } from "../../actions";
import LoaderFullScreen from "../../components/loader/LoaderFullScreen";

class HomeContainer extends Component {
  componentDidMount() {
    const {
      authState: { isSignedIn },
      refreshAuthToken,
    } = this.props;
    if (!isSignedIn && localStorage.getItem("refresh")) {
      refreshAuthToken();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.authState.isSignedIn !== this.props.authState.isSignedIn) {
      this.props.checkUserType();
    }
  }
  render() {
    // console.log(this.props);
    const {
      authState: { loading },
    } = this.props;
    if (loading) {
      return <LoaderFullScreen type="danger" message="Please wait" />;
    }
    return <></>;
  }
}

const mapStateToProps = ({ authState }) => {
  return { authState };
};

export default connect(mapStateToProps, { refreshAuthToken, checkUserType })(
  HomeContainer
);
