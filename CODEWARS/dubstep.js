function songDecoder(song){
    let noWUB = song.split('WUB');
    let filter = noWUB.filter(x => x != '')
    return filter.join(' ');
  }

console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));