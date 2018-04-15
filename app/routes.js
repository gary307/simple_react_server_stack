import React from "react";
import Home from "./components/views/Home/home.js";
import Form from "./components/views/Form/form.js";
import "./style.css";
import NotFound from "./components/views/notFound/notFound.js";
import Todo from "./components/views/Todo/Todo.js";
import TodoRedux from "./components/views/TodoRedux/TodoRedux.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

const pageComponent = Page => {
  return props => (
    <CSSTransitionGroup
      component="div"
      transitionName="example"
      transitionAppear={true}
      transitionEnter={true}
      transitionLeave={true}
      transitionEnterTimeout={12500}
      transitionAppearTimeout={12500}
      transitionLeaveTimeout={12500}
    >
      <div>
        <Page className="animated-page-wrapper" key={Page} {...props} />
      </div>
    </CSSTransitionGroup>
  );
};

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={pageComponent(Home)} />
        <Route path="/form" component={pageComponent(Form)} />
        <Route path="/todo" component={pageComponent(Todo)} />
        <Route path="/todo_redux" component={pageComponent(TodoRedux)} />
        <Route path="*" component={pageComponent(Form)} />
      </Switch>
    </div>
  );
};

export default Routes;
