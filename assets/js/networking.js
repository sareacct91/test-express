export { getData, setData };

const getData = async () => {
  try {
    const response = await fetch('http://localhost:5001/GET-command');
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
    const response = await fetch('http://localhost:5001/POST-command', options);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};