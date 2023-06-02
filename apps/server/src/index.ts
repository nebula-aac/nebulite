import { createServer } from "./server";
import { log } from "@fenixui-org/logger";

const port = 5001;
const server = createServer();

server.listen(port, () => {
	log(`server running on ${port}`);
});
