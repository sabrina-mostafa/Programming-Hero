import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/routeHandler";
import "./routes"
import findDynamicRoute from "./helpers/dynamicRouteHandler";


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running....");


    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path);

    if (handler) {
        handler(req, res);
    }
    else if (findDynamicRoute(method, path)) {
        const match = findDynamicRoute(method, path);
        (req as any).params = match?.params;
        match?.handler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({
            success: false,
            message: "Route not found!!",
            path,
        }))
    }


    // ------------- test post method -------------
    // if (req.url == "/api/users/test" && req.method == "POST") {
    //     const user1 = {
    //         id: 1,
    //         name: "Sabrina"
    //     }

    //     res.writeHead(200, { "content-type": "application/json" });
    //     res.end(JSON.stringify(user1));
    // }

})

// server is an object (an instance of http.Server)
// Think of it like this:  const car = new Car();
// car(); // ❌
// car.start();

server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
})