const axios = require('axios');
const fs = require("fs");

let rawData = fs.readFileSync("./bod.json");
let data = JSON.parse(rawData);

const auth = 'admin:adminpw@'
const URL = `http://${auth}20.193.146.8:5984/mychannel_fabcar/`

// const version = 'CgMBBgA=';
const customId = 'bod';

axios.put(URL + customId, {
  data,
  '~version' : 'CgMBBgA='
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });