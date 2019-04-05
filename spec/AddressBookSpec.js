describe('Address Book', function() {
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    if('should be able to add a contact', function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});
