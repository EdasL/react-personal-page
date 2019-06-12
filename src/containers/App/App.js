import React, { Component } from 'react';
import Layout from "../../hoc/Layout/Layout";
import SkillBuilder from "../SkillBuilder/SkillBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SkillBuilder />
        </Layout>  
      </div>
    );
  }
}

export default App;
