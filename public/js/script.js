import { getClientInfo } from "./client-input.js";
import { getData, setData } from "./networking.js";

document.getElementById('clientInputForm').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  
  const clientInfo = getClientInfo();
  // console.log(clientInfo);
  
  // const serverData = getData();
  const serverResponse = setData(clientInfo);

  // console.log(await serverData);
  console.log(await serverResponse);
});