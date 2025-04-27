const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

// const parseIsFavourite = (isFavourite) => {
//   const isString = typeof Boolean === 'string';
//   if (!isString) return;

//   const parsedNumber = parseInt(isFavourite);
//   if (Number.isNaN(parsedNumber)) {
//     return;
//   }

//   return parsedNumber;
// };

export const parseFilterParams = (query) => {
  //   const { contactType, maxAge, minAge, maxAvgMark, minAvgMark } = query;
  const { contactType } = query;

  const parsedType = parseType(contactType);
  //   const parsedMaxAge = parseNumber(maxAge);
  //   const parsedMinAge = parseNumber(minAge);
  //   const parsedMaxAvgMark = parseNumber(maxAvgMark);
  //   const parsedMinAvgMark = parseNumber(minAvgMark);

  return {
    contactType: parsedType,
    // maxAge: parsedMaxAge,
    // minAge: parsedMinAge,
    // maxAvgMark: parsedMaxAvgMark,
    // minAvgMark: parsedMinAvgMark,
  };
};
