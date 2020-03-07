function sendNags(){

var YOUR_URL_ENDPOINT = "{{URL_ENDPOINT}}";

var data = {
      "Jira_Id": id,
      "Channel": channel,
      "Priority": priority,
      "PM": pm, 
      "Assignee": assignee,
      "Target Date": date,
      "About": about
    };
    
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      // Convert the JavaScript object to a JSON string.
      'payload' : JSON.stringify(data)
    };
      
      try {
        UrlFetchApp.fetch(YOUR_URL_ENDPOINT, options); // Webhook 1
        // Logger.log("sent msg");
      }
      catch(error) {
        // console.error(error);
        Logger.log(error);
      }

};
