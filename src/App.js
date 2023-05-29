import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Layout from "./component/layout/Layout";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <div className="home_page grid grid-rows-1">
      <Router>
        <Layout>
          <Routers />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
