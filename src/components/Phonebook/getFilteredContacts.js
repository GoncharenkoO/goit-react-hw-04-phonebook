export const getFilteredContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  const filterStr = filter.toLowerCase();
  const result = contacts.filter(contact => {
    const name = contact.name.toLowerCase();
    return name.includes(filterStr);
  });
  return result;
};
