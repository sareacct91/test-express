export { getClientInfo, searchClientInfo };

function getClientInfo () {
  // DOM selectors
  const clientFirstNameInputEl = document.getElementById('clientFirstNameInput');
  const clientLastNameInputEl = document.getElementById('clientLastNameInput');
  const clientPhoneNumberInputEl = document.getElementById('clientPhoneNumberInput');
  const clientAddressInputEl = document.getElementById('clientAddressInput');
  const clientEmailInputEl = document.getElementById('clientEmailInput');

  // Return data
  return {
    firstName: clientFirstNameInputEl.value,
    lastName: clientLastNameInputEl.value,
    phoneNumber: clientPhoneNumberInputEl.value,
    address: clientAddressInputEl.value,
    email: clientEmailInputEl.value
  }
};
 
function searchClientInfo () {
  // DOM selectors
  const clientFirstNameSearchEl = document.getElementById('clientFirstNameSearch');
  const clientLastNameSearchEl = document.getElementById('clientLastNameSearch');
  const clientPhoneNumberSearchEl = document.getElementById('clientPhoneNumberSearch');
  const clientEmailSearchEl = document.getElementById('clientEmailSearch');

  // Return data
  return {
    firstName: clientFirstNameSearchEl.value,
    lastName: clientLastNameSearchEl.value,
    phoneNumber: clientPhoneNumberSearchEl.value,
    email: clientEmailSearchEl.value
  }
}