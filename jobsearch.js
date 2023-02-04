const linkedIn = require('linkedin-jobs-api');
const fs = require('fs');
var body
const queryOptions = {
  keyword: 'pr',
  location: 'India',
  dateSincePosted: 'past Week',
  jobType: 'intern',
  remoteFilter: 'remote',
  salary: '10000',
  experienceLevel: 'entry level',
  limit: '10'
};

linkedIn.query(queryOptions).then(response => {
	console.log(response);
  const myJSON = JSON.stringify(response);
  fs.writeFile("output.json", myJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
});
