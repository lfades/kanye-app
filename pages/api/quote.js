import fetch from 'isomorphic-fetch';

export default async (req, res) => {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();

  res.json(data);
};
