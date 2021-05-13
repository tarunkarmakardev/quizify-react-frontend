import { connect } from "react-redux";
import { requestSignIn } from "../../actions";
import SignIn from "../../components/auth/SignIn";

const mapStateToProps = ({ signInState }) => {
  return { signInState };
};

export default connect(mapStateToProps, { requestSignIn })(SignIn);
