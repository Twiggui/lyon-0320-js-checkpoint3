const playlistsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const playlistController = require('../controllers/playlists');

// playlistsRouter.get('/', asyncHandler(controller));
playlistsRouter.post(
  '/create-playlist',
  asyncHandler(playlistController.createPlaylist)
);
playlistsRouter.get(
  '/:playlistId',
  asyncHandler(playlistController.findPlaylist)
);
playlistsRouter.post(
  '/:playlistId/create-song',
  asyncHandler(playlistController.createSongAndSendToPlaylist)
);

playlistsRouter.get(
  '/:playlistId/songs',
  asyncHandler(playlistController.findSongsFromPlaylist)
);

// playlistsRouter.delete('/:playlistId', asyncHandler(controller));
// playlistsRouter.update('/:playlistId', asyncHandler(controller));
// playlistsRouter.delete('/:playlistId/:songId', asyncHandler(controller));
// playlistsRouter.update('/:playlistId/:songId', asyncHandler(controller));

// en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist.
// en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url (juste ses données propres, pas les pistes associées).
// en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.
// en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.
// en tant qu'utilisateur, je veux pouvoir supprimer une playlist.
// en tant qu'utilisateur, je veux pouvoir modifier une playlist.
// en tant qu'utilisateur, je veux supprimer un morceau d'une playlist.
// en tant qu'utilisateur, je veux modifier un morceau d'une playlist.

module.exports = playlistsRouter;
