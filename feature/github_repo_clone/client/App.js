import React, { Component } from 'react';

import Layout from './components/Layout';
import './stylesheets/style.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import GithubContent from './components/GithubContent';

export class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header />
          <Banner />
          <GithubContent />
        </Layout>
      </>
    );
  }
}

export default App;
