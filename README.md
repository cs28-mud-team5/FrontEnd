# FrontEnd

Client
1. Deploy a LambdaMUD client that connects to the test server
While your backend developers are implementing your production server, you may test your endpoints on the test server hosted at https://lambda-mud-test.herokuapp.com/. You can use this to test your interface for account registration, login, movement and map display. (See sample API commands below.) Your app should store the user’s auth token upon successful registration/authentication and use it to authenticate subsequent API requests.

2. Connect your LambdaMUD client to the production server
Once your backend is up and running, you should be able to swap out the test host URL for your production URL and interact with your production server.

3. Display a visual map of the world
Your backend should implement a rooms endpoint which will return data for every room in your world. Your job will be to build a map to display a map of those rooms, along with relevant information, like marking which room the player is currently in.

4. STRETCH: Implement client “hearing” (Brady walks in from the north) and chat using the Pusher websocket library.
More on Pusher below.
Pusher
WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. You may use the Pusher service to handle the WebSocket connections as a stretch goal for your project. You can read more about them here.
