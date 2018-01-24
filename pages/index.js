import Layout from '../components/Layout';
import withAuth from '../components/withAuth';
import { initStore } from '../redux/store';

export default withAuth(initStore, state => state)(() => (
  <Layout>
    <h1>hello :]</h1>
  </Layout>
));
