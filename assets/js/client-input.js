export const getClientInfo = () => {
  // DOM selectors
  const clientFirstNameEl = document.getElementById('clientFirstName');
  const clientLastNameEl = document.getElementById('clientLastName');
  const clientPhoneNumberEl = document.getElementById('clientPhoneNumber');
  const clientAddressEl = document.getElementById('clientAddress');
  const clientEmailEl = document.getElementById('clientEmail');

  // Return data
  return {
    firstName: clientFirstNameEl.value,
    lastName: clientLastNameEl.value,
    phoneNumber: clientPhoneNumberEl.value,
    address: clientAddressEl.value,
    email:clientEmailEl.value
  }
};