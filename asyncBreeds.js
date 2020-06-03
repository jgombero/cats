const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    
    if (error) functionToRunWhenThingsAreDone(undefined);

    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// Callback function
const printOutCatBreed = breedInfo => {
  console.log('Return Value: ', breedInfo)
};

module.exports = breedDetailsFromFile;