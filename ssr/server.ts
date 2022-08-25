import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import FastifyCaching from "@fastify/caching";
import path from "path";

import { renderToString } from "../renderToString";
import { app } from "../app";
import { index } from "./index";

const fastify = Fastify();

fastify.register(FastifyCaching, {
  privacy: FastifyCaching.privacy.NOCACHE,
});

fastify.register(FastifyStatic, {
  root: path.join(__dirname, "dist"),
});

fastify.get("/", (req, reply) => {
  reply.type("text/html").send(index(renderToString(app)));
});

fastify.listen({ port: 4321 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
