import { connect } from "react-redux";
import { requestSignUp } from "../../actions";
import SignUp from "../../components/auth/SignUp";

const mapStateToProps = ({ signUpState }) => {
  return { signUpState };
};

export default connect(mapStateToProps, { requestSignUp })(SignUp);
