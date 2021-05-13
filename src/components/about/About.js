import React, { Component } from "react";
import ErrorPage from "../errorPage/ErrorPage";
import MessageBox from "../messageBox/MessageBox";
import ReactHtmlParser from "react-html-parser";

export default class About extends Component {
  componentDidMount() {
    const { aboutPageState, fetchAbout } = this.props;
    if (aboutPageState.data.length === 0) {
      fetchAbout();
    }
  }
  render() {
    // console.log(this.props);
    const {
      aboutPageState: { loading, status, data },
    } = this.props;

    if (loading) {
      return (
        <div className="mt-4">
          <MessageBox loading />
        </div>
      );
    }
    if (status > 400) {
      return <ErrorPage statusCode={status} />;
    }

    if (status === 200) {
      if (data.length !== 0) {
        const { heading, body } = data[0];
        return (
          <div id="about" className="mt-4">
            <MessageBox heading={heading} body={ReactHtmlParser(body)} />
          </div>
        );
      }
      return null;
    }

    return null;
  }
}
