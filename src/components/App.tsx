import React, { useEffect } from "react";
import { get } from "utils/requests";

import Titlebar from "components/titlebar/Titlebar";
import Tabs from "./tabs/Tabs";
import Panel from "./tabs/Panel";
import styles from "components/App.module.scss";
import Decode from "./decode/Decode";
import Footer from "./footer/Footer";
import Encode from "./encode/Encode";

function App() {
  useEffect(() => {
    /**
     * App loaded call to Flask
     * @see /src/utils/requests.js
     * @see /app.py
     */
    setTimeout(
      () =>
        get(
          "loaded",
          (response: JSON) => console.log(response),
          (error: Error) => console.error(error)
        ),
      3000
    );
  }, []);

  return (
    <>
      <Titlebar />
      <div className={styles.app}>
        <Tabs selected={0}>
          <Panel title="Encode">
            <Decode />  
          </Panel>
          <Panel title="Decode">
            <Encode />
          </Panel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default App;
