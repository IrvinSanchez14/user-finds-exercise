import "./pre-start";
import logger from "jet-logger";
import server from "./server";

// Constants
const serverStartMsg = "Express server started on port: ";
const port = process.env.PORT || 3001;

// Start server
server.listen(port, () => {
  logger.info(serverStartMsg + port);
});
