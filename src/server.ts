import Fastify from "fastify";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import "dotenv/config";
// import DatabaseServer from "./utils/db/mssql/dbConfig";
import DatabaseServer from "./utils/db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = Fastify({
  logger: false
});

DatabaseServer.getInstance();

await server.register(import("@fastify/cors"));

await server.register(import("@fastify/autoload"), {
  dir: join(__dirname, "routes"),
  indexPattern: /index.ts/,
  forceESM: true
});

server.listen({ port: process.env.PORT ?? 3000 } as any, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Listenning on ${address}`);
});
