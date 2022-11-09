import DatabaseServer from "../../utils/db";
// import { JsonStreamStringify } from "json-stream-stringify";
export default async (server: any, opts: any) => {
  server.get("/", async (req: any, res: any) => {
    const data = await DatabaseServer.getStreamedDocuments("skills", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1, level: 1 }, 0);
    res.raw.writeHead(200, { "Content-Type": "application/json" });
    // new JsonStreamStringify(data).pipe(res.raw);
    res.raw.write("[\n");
    data.on("data", function (doc: any) {
      res.raw.write(JSON.stringify(doc) + ", \n");
    });
    data.on("end", function () {
      res.raw.end("]");
    });
    // res.send(data);
    // const data = await DatabaseServer.getDocuments("skills", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1, level: 1 }, 0);
    // res.send(data);
  });
};
