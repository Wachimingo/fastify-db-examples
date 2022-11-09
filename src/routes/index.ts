import DatabaseServer from "../utils/db";

export default async (server: any, opts: any) => {
  server.post("/", async (req: any, res: any) => {
    const data: any = await DatabaseServer.runQuery(req.body.query);
    res.send(data);
    // res.type("text/html");
    // res.send(`<!doctype html>
    // <html>

    // <head>
    //     <meta charset="utf-8">
    //     <title>MSSQL app</title>
    //     <meta name="description" content="App connected to MS SQL server">
    //     <meta name="viewport" content="width=device-width,initial-scale=1">
    // </head>

    // <body>
    //   <table>
    //     <tr>
    //       <th>OrderID</th>
    //       <th>CustomerID</th>
    //     </tr>
    //     ${data.map((row: any) => {
    //       return `<tr>
    //         <td>${row.OrderID}</td>
    //         <td>${row.CustomerID}</td>
    //       </tr>`;
    //     })}
    //   </table>
    // </body>

    // </html>`);
  });
};
