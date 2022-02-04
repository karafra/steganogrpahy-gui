import "index.scss";

import * as serviceWorker from "serviceWorker";

import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";
import "components/App.module.scss";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register({});
