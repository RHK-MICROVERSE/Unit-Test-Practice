function stringCount(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error("The string arguments is at least 1 character long and not longer than 10 characters!");
  }
}

module.exports = stringCount;
