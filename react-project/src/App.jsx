import React from "react";

import Layout from "./containers/Layout/Layout";

import Routes from "./routes";

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes />
      </div>
    </Layout>
  );
}

export default App;
