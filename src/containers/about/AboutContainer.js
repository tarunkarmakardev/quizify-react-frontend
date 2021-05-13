import { connect } from "react-redux";
import About from "../../components/about/About";
import { fetchAbout } from "../../actions";

const mapStateToProps = ({ aboutPageState }) => {
  return { aboutPageState };
};

export default connect(mapStateToProps, { fetchAbout })(About);
