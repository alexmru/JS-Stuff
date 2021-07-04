function domainName(strng){
  let matchHTTP = strng.match(/https?:\/\/www\.([A-Za-z0-9-]+)\./);
  let matchWWW = strng.match(/www\.([A-Za-z0-9-]+)\./);
  let matchNoPrefix = strng.match(/([A-Za-z0-9-]+)\./);
  if(matchHTTP) {
      return matchHTTP[1];
  } else if (matchWWW) {
      return matchWWW[1];
  } else if (matchNoPrefix) {
      return matchNoPrefix[1];
  }
}


console.log(domainName('dwndq4v-vr5.it/img/'))

// function domainName(url){
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }