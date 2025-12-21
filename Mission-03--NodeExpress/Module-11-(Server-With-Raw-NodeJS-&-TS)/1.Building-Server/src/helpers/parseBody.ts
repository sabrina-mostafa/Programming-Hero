import { IncomingMessage } from "http";

async function parsedBody(req: IncomingMessage): Promise<any> {
    return new Promise((resolve, reject) => {
        let body = '';

        // listen for data chunk 
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            }
            catch (err: any) {
                reject(err);
            }
        });

        // if any error occurs before "end"
        req.on("error", reject);
    });
};

export default parsedBody;