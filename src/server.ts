import server from "./app.js";
import { initDB } from "./db/index.js";

const main = () => {
  initDB();
  server.app.listen(server.port, () => {
    console.log(`Example app listening on port ${server.port}`);
  });
};

main();
