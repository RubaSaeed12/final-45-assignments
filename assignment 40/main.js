function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist 1", "The First Album"));
console.log(make_album("Artist 2", "The Second Album"));
console.log(make_album("Artist 3", "The Third Album"));
