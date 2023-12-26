export { getData, setData };

const getData = async (data) => {
  let qParamStr = '';

  if (data) {
    const { firstName, lastName, phoneNumber, email } = data;
    qParamStr = `?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&email=${email}`;
  }

  try {
    const response = await fetch(`http://localhost:5001/retrieve-client-info${qParamStr}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const setData = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch('http://localhost:5001/update-client-info', options);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};