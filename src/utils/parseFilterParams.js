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
  const { contactType } = query;
  const parsedType = parseType(contactType);

  return {
    contactType: parsedType,
  };
};
