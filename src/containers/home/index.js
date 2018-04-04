import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout';

const Home = () => (
  <Layout>
    <Link to="/sample" href="/sample">Navigate to Sample Page</Link>
  </Layout>
);

export default Home;
