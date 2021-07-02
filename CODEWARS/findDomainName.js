function domainName(url){
  let match1 = url.match(/\/{1,2}(\w*)\./);
  let match2 = url.match(/\w?\.(\w*)\./);
    if (match1) {
        return match1[1];
    } else if (match2) {
        return match2[1];
    }
}


console.log(domainName('www.google.ro'))