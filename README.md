# Http Request Service
The main goal of the code is create an API REST in order to develop our own client services and use some external services using the Steamworks API. 
The service is open in the port 3000. The main route 'localhost:3000' show a "Hello World!!!" message. We can difference two different services:

 - The file "users.js" retrieve the information avaible in a local list of users. This one is avaible in the "usersList.json". 
 The data retrieved is composed by:
    * userId (string)
    * name (string)
    * coins (int)
 In order to retrieve the data, it could be get all of them using the '/users' route or they can be filtered using the userid, '/users/userid'. If the userid introduced doesn't exist, the code return an error message indicating the problem.

 - The file "applist.js" retrieve the information using the Steamworks WebApi, using the route '/GetAppList'. By the url indicated on the code, it is possible to retrieve all the list of apps in steam. 
 The data retrieved is composed by:
    *appid (string)
    *name (string)
 In order to retrieve a specific appid, the users can add at the route the name of the game, like this '/GetAppList/NameOfGame'. If the name introduced doesn't exist, the code return an error message indicating the problem.