import Layout from '../components/Layout';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';

export default withRedux(initStore, state => state)(props => (
  <Layout>
    <h1>About :]</h1>
    <pre>{JSON.stringify(props)}</pre>
  </Layout>
));
