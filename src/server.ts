import server from "./app.js";

server.app.listen(server.port, () => {
  console.log(`Example app listening on port ${server.port}`);
});
