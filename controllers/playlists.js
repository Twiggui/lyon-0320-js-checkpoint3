const {
  createPlaylist,
  findPlaylist,
  createSong,
  findSongs,
} = require('../models/playlists');

module.exports.createPlaylist = async (req, res) => {
  // const { title, genre } = req.body;
  const data = await createPlaylist(req.body);
  if (data) {
    return res.status(200).send(data);
  }
  return res.status(500).send('Something went wrong');
};

module.exports.findPlaylist = async (req, res) => {
  const id = req.params.playlistId;
  const data = await findPlaylist(id);
  if (data) {
    return res.status(200).send(data);
  }
  return res.status(500).send('Cannot find the playlist');
};

module.exports.createSongAndSendToPlaylist = async (req, res) => {
  const song = await createSong(req.body, req.params.playlistId);
  if (song) {
    return res.status(200).send(song);
  }
  return res.status(500).send('Something went wrong with a song');
};

module.exports.findSongsFromPlaylist = async (req, res) => {
  const songs = await findSongs(req.params.playlistId);
  if (songs) {
    return res.status(200).send(songs);
  }
  return res.status(500).send('Cannot find the songs from the playlist');
};
