import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import Widgets from "./components/Widgets";
import Calender from "./components/Layout/Charts/Calender";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/charts" component={Widgets} />
            <Route exact path="/calender" component={Calender} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
