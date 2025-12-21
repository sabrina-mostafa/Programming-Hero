import { ServerResponse } from "http";


function sendJson(res: ServerResponse, statusCode: number, data: any) {
    res.writeHead(statusCode, { "contentType": "application/json" });
    res.end(JSON.stringify(data));
}

export default sendJson;