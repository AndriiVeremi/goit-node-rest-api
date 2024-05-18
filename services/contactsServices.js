import Contact from "../models/Contact.js";

export const listContacts = (search = {}) => {
  const { filter = {} } = search;
  return Contact.find(filter);
};

export const getContact = (filter) => Contact.findOne(filter);

export const addContact = (data) => Contact.create(data);

export const updateContactById = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

export const removeContact = (filter) => Contact.findOneAndDelete(filter);

export const updateContactFavorites = (contactId, data) =>
  Contact.findByIdAndUpdate(contactId, data);
