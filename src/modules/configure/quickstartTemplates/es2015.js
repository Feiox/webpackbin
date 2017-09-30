export default {
  selectedFileIndex: 1,
  loaders: {
    babel: {
      es2015: true,
    },
  },
  files: [
    {
      name: 'index.html',
      content: `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
    </head>
    <body>
      <script src="main.js"></script>
    </body>
  </html>
  `,
    },
    {
      name: 'main.js',
      isEntry: true,
      content: '',
    },
  ],
};
