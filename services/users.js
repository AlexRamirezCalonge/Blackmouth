let usersList = require('../usersList.json')

module.exports = function(app) {
    app.route('/users/:id?')
        .get(getUsers)
}

//Second Service - Users List
//Optional ID Parameter
function getUsers(request, response) {
    let id = request.params.id;
    let httpResponse;

    if(id==null){
        response.send(usersList.users);
    }
    else{
        for(let i=0; i<usersList.users.length; i++){
            if(usersList.users[i].userId==id){
                httpResponse=usersList.users[i];
                break;
            }
            else{
                httpResponse={error:"The UserId introduced doesn't belong to an existing user"};
            }
        }
        response.send(httpResponse);
    }
}