module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'EDM Council',
    titleTemplate: 'EDM Council - Specifications - %s',
    meta: [
      {
        name: 'description',
        content: 'The FIBO Ontologies and Vocabulary published by the EDM Council',
      },
    ],
  },
};
