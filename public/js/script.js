import { getClientInfo, searchClientInfo } from "./client-IO.js";
import { getData, setData } from "./networking.js";

document.getElementById('clientInputForm').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  
  const clientInfo = getClientInfo();
  const serverResponse = setData(clientInfo);
  console.log(await serverResponse);
});

document.getElementById('clientSearchForm').addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const searchInfo = searchClientInfo();
  const serverData = getData(searchInfo);
  console.log(await serverData);
});