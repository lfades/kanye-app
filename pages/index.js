import Layout from '../components/Layout';
import Content from '../components/Content';
import Header from '../components/Header';
import Card from '../components/Card';
import Quote from '../components/Quote';
import { getQuote } from '../lib/quotes-api';

const HELP_TEXT = {
  fetch: 'With an external fetch v2'
};

const Index = ({ quotes }) => (
  <Layout>
    <Content>
      <Header>Kanye Quotes v2</Header>
      {quotes.map(({ id, quote }) => (
        <Card key={id}>
          <Quote text={quote} helpText={HELP_TEXT[id]}></Quote>
        </Card>
      ))}
    </Content>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const quotes = [{ ...(await getQuote()), id: 'fetch' }];

  return { quotes };
};

export default Index;
