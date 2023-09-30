import { httpRouter } from "convex/server";
import { submitRecord, submitRecordBatch } from "./session";
import { loginWorker } from "./sessionWorker";

const http = httpRouter();

const apiVersion ='/api/v0'

http.route({
  path: `${apiVersion}/submitRecord`,
  method: "POST",
  handler: submitRecord,
});

http.route({
    path: `${apiVersion}/submitRecordBatch`,
  method: "POST",
  handler: submitRecordBatch,
});


http.route({
    path: `${apiVersion}/loginWorker`,
  method: "GET",
  handler: loginWorker,
});

export default http;