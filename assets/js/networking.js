export { getData, setData };

const getData = async () => {
  const response = await fetch('http://localhost:5001/GET-command');
  const data = await response.json();
  
  return data;
};

const setData = async (data) => {
  const options = {
    method: "POST",
      headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }

  const response = await fetch('http://localhost:5001/POST-command', options);
  const responseData = await response.json();

  return responseData;
};