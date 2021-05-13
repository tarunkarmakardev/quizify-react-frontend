import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import ErrorPage from "./components/errorPage/ErrorPage";
// import QuizUpdateForm from "./components/quiz/QuizUpdateForm";

// Containers
// Navbar
import NavBarContainer from "./containers/navbar/NavBarContainer";
// Home
import HomeContainer from "./containers/home/HomeContainer";
// About
import AboutContainer from "./containers/about/AboutContainer";
// Auth
import SignUpContainer from "./containers/auth/SignUpContainer";
import SignInContainer from "./containers/auth/SignInContainer";
// Quiz
import QuizListContainer from "./containers/quiz/QuizListContainer";
import QuizStartContainer from "./containers/quiz/QuizStartContainer";
import QuizDisplayContainer from "./containers/quiz/QuizDisplayContainer";
import QuizScoreCardContainer from "./containers/quiz/QuizScoreCardContainer";
import QuizDashboardContainer from "./containers/quiz/QuizDashboardContainer";
import QuizCreateContainer from "./containers/quiz/QuizCreateContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Home - manages auth status */}
        <HomeContainer />
        <NavBarContainer />
        <Switch>
          <Route exact path="/">
            <>
              {/* About */}
              <AboutContainer />
            </>
          </Route>
          {/* Auth - signup/signin*/}
          <Route exact path="/signup" component={SignUpContainer} />
          <Route path="/signin" component={SignInContainer} />
          {/* Quiz */}
          {/* List */}
          <Route exact path="/quiz/list" component={QuizListContainer} />
          <Route
            exact
            path="/quiz/list/own"
            key={"quizListOwn"}
            component={QuizListContainer}
          />
          {/* Quiz Start page */}
          <Route
            exact
            path="/quiz/take/:quizId"
            component={QuizStartContainer}
          />
          {/* Quiz Questions */}
          <Route
            exact
            key={"QuizDisplay"}
            path="/quiz/take/:quizId/:quesNum"
            component={QuizDisplayContainer}
          />
          {/* Student's Dashboard */}
          <Route exact path="/dashboard" component={QuizDashboardContainer} />
          {/* Quiz Score Card*/}
          <Route
            exact
            path="/quiz/scorecard/:quizId"
            component={QuizScoreCardContainer}
          />
          {/* For teachers */}
          {/* Create/Update Quiz */}
          <Route
            exact
            path="/quiz/create"
            key={"quizCreate"}
            component={QuizCreateContainer}
          />

          {/* <Route path="/quiz/update/:quizId" component={QuizUpdateForm} /> */}
          {/* Quiz End */}
          {/* ErrorPage */}
          <Route exact path="/error" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
