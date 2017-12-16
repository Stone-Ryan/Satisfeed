module.exports = app => {
  app.get('/api/surveys');

  app.post('/api/surveys');

  app.post('/api/surveys/webhooks')
};
