export const filterCharacters = (filter, characters) => {
  if (filter) {
    return characters.filter((item) => {
      if (
        item.character &&
        item.character.toLowerCase().includes(filter.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  } else {
    return characters;
  }
};
