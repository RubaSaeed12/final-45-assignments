function make_album(artist:string, title:string, tracks?: number) {
    let album = {artist, title, tracks}
    if (tracks) { 
        album['tracks'] = tracks

    }
    return album
}
console.log(make_album("Artist 1" , "The First Album"))
console.log(make_album("Artist 2" , "The Second Album"))
console.log(make_album("Artist 3" , "The Third Album"))
