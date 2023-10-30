export const sortCharacters = (type, characters) => {
  // Sort the data

  switch (type) {
    case "character-az":
      characters.sort((item1, item2) => {
        if (item1.character.toLowerCase() > item2.character.toLowerCase()) {
          return 1;
        } else if (
          item1.character.toLowerCase() < item2.character.toLowerCase()
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      break;

    case "character-za":
      characters.sort((item1, item2) => {
        if (item1.character.toLowerCase() > item2.character.toLowerCase()) {
          return -1;
        } else if (
          item1.character.toLowerCase() < item2.character.toLowerCase()
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      break;

    case "quote-az":
      characters.sort((item1, item2) => {
        if (item1.quote.toLowerCase() > item2.quote.toLowerCase()) {
          return 1;
        } else if (item1.quote.toLowerCase() < item2.quote.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
      break;

    case "quote-za":
      characters.sort((item1, item2) => {
        if (item1.quote.toLowerCase() > item2.quote.toLowerCase()) {
          return -1;
        } else if (item1.quote.toLowerCase() < item2.quote.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    default:
      break;
  }
};
