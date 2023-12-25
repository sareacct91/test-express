import { getClientInfo } from "./client-input.js";
import { getData, setData } from "./networking.js";

document.getElementById('clientInputForm').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  
  const clientInfo = getClientInfo();
  // console.log(clientInfo);
  
  console.log(getData());
  console.log(setData(clientInfo));
});