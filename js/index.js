function shortenString(str, num) {
  let shortString;
  if (str.length > num) {
    shortString = str.substr(0, num)
    console.log(shortString)
    return shortString + "...";
  }else {
    return str;
  }
}

shortenString("aStringThatCanBeShortenedToAnyLength", 10);
