const fetch = require('node-fetch');
const url = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

module.exports = function(app) {
    app.route('/GetAppList/:name?')
        .get(getAppList)
}

//Third Service - AppList
////Optional Name Parameter
function getAppList(request, response) {
    let name = request.params.name;
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonResponse) {
        if(name==null){
            response.send(jsonResponse);
        }
        else{
            for(let i=0; i<jsonResponse.applist.apps.length; i++){
                if(jsonResponse.applist.apps[i].name==name){
                    httpResponse={appid: jsonResponse.applist.apps[i].appid};
                    break;
                }
                else{
                    httpResponse={error:"The name introduced doesn't belong to an existing game on the list"};
                }
            }
            response.send(httpResponse);
        }
    }); 
}