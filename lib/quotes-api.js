import fetch from 'isomorphic-fetch';

export const getQuote = async url => {
  const res = await fetch(url);
  const data = await res.json();

  return { quote: data.quote };
};
