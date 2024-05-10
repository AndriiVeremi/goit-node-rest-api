import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = async (contactId) => {
    const result = await Contact.findById(contactId)
    return result
};

export const addContact = (data) => Contact.create(data);

export const updateContactById = (contactId, data) => Contact.findByIdAndUpdate(contactId, data);

export const removeContact = (contactId) => Contact.findByIdAndDelete(contactId);

export const updateContactFavorites = (contactId, data) => Contact.findByIdAndUpdate(contactId, data);
