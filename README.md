Fundamental idea
This app is built based on the peer-to-peer pattern. It means that every user is connected directly to each other. First, users are connected to a server. When users log into the system, they send to the server the information of their IP addresses. Server stores all the IP addresses and the status of all active users and advertise this information to new users logging into the system. Therefore, all the users have the IP addresses of the others and can open an direct connection.

How I implemented this server
I used ExpressJS - a Javascript for creating http server.

Disadvantage
This version can only be used in a local access network. I hope the next version would be created soon.

Link to client source code
https://github.com/Aaron-24DucAnh24/p2p-chat-app-client
