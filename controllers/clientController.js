const { readFile, appendFile } = require("fs/promises");

let clientsData;

// Initialize clientData
(async () => {
  try {
    clientsData = JSON.parse(await readFile("./data/client-information.json", "utf8")) || [];
    console.log('clientsData initilized: ', clientsData);
  } catch (err) {
    console.log(err);
    clientsData = [];
  }
})();

// Create route controller
const clientController = {
  createClient: async (req, res) => {
    // Check if reqData is valid
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log('No data in req.body');
      res.status(400).send({ message: 'No req.body' });
      return;
    }

    // Add the new client data to clientsData
    clientsData.push(req.body);

    // Update the json file
    try {
      await appendFile("./data/client-information.json", JSON.stringify(clientsData));

      // log and send out ok success message
      console.log('Client data added!');
      res.send({ message: 'Client data received!' });
    } catch (error) {
      console.log(error);
    }
  },

  getClient: (req, res) => {
    // Check if there're search parameters
    if (!req.query || Object.keys(req.query).length === 0) {
      res.status(400).send({ message: "missing query parameters!" });
      return console.log("400: missing query parameters!");
    }

    // Get the data from the queryParameters
    console.log('This is the queries: ', req.query);
    const { firstName, lastName, phoneNumber, email } = req.query;

    let matchedClient = [];

    // Loop through the clientDataArr
    for (const client of clientsData) {
      // if first and last name matched, or phone number matched, or email matched
      if (
        (client.firstName === firstName && client.lastName === lastName) ||
        client.phoneNumber === phoneNumber ||
        client.email === email
      ) {
        // Set matchedClient to the client object
        matchedClient.push(client);
        console.log("Found matching client info", client);
      }
    }
    // If matchedClient was found, send back the data
    matchedClient ? res.send(matchedClient) : res.send("No matching client");
  },
};

module.exports = clientController;
