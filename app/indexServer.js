import React from "react";
import ReactDOMServer from "react-dom/server";
import templateFn from "./template";
import App from "./App.js";

import StaticRouter from "react-router-dom/StaticRouter";

import {
  HashHistory,
  BrowserHistory,
  BrowserRouter,
  Route
} from "react-router-dom";

export default (req, res) => {
  let context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const template = templateFn(html);
  return res.send(template);
};
