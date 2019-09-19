import Layout from '../components/Layout';
import Content from '../components/Content';
import Header from '../components/Header';
import Card from '../components/Card';

const About = ({ quotes }) => (
  <Layout>
    <Content>
      <Header>Kanye Quotes</Header>
      <Card>This is the About Page</Card>
    </Content>
  </Layout>
);

export default About;
