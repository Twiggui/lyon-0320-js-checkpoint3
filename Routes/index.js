const playlistsRouter = require('./playlists');

module.exports = (app) => {
  // app.use('/things', thingsRoutes);
  app.use('/playlists', playlistsRouter);
};
