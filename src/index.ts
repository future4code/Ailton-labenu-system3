import app from "./data/app";
import { endpointTeste } from "./endpoints/endpointTeste";

app.get("/teste", endpointTeste);
