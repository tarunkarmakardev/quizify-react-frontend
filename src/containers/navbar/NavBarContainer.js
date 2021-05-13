import { connect } from "react-redux";
import NavBar from "../../components/navbar/NavBar";
import { requestSignOut } from "../../actions";

const mapStateToProps = ({ authState, userTypeState }) => {
  return { authState, userTypeState };
};

export default connect(mapStateToProps, { requestSignOut })(NavBar);
