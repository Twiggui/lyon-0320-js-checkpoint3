const db = require('../db.js');

const createPlaylist = async (newPlaylist) => {
  const { title, genre } = newPlaylist;
  const result = await db
    .query(`INSERT INTO playlist (title, genre) VALUES (?,?) `, [title, genre])
    .catch((err) => console.log(err));
  if (result) {
    return { id: result.insertId, title, genre };
  }
  return null;
};

const findPlaylist = async (id) => {
  const result = await db
    .query(`SELECT * FROM playlist WHERE id = ?  `, [id])
    .catch((err) => console.log(err));
  if (result.length) {
    return result[0];
  }
  return null;
};

const createSong = async (dataSongs, playlistId) => {
  const { title, artist, album_picture, youtube_url } = dataSongs;
  const result = await db
    .query(
      `INSERT INTO track (title, artist, album_picture, youtube_url, playlist_id) VALUES (?,?,?,?,?)`,
      [title, artist, album_picture, youtube_url, playlistId]
    )
    .catch((err) => console.log(err));
  if (result) {
    return {
      id: result.insertId,
      title,
      artist,
      album_picture,
      youtube_url,
      playlistId,
    };
  }
  return null;
};

const findSongs = async (playlistId) => {
  const result = await db
    .query(`SELECT * FROM track WHERE playlist_id = ?`, playlistId)
    .catch((err) => console.lof(err));
  if (result.length) {
    return result;
  }
  return null;
};

module.exports = { createPlaylist, findPlaylist, createSong, findSongs };
