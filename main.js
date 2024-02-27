const http = require("http");
const {createStore} = require("./src/createStore");
const store = createStore();
const {createApi} = require("./src/createApi");
const api = createApi({store});
const server = http.createServer(api);

server.listen(3000);
