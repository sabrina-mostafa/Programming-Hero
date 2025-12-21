import { IncomingMessage, ServerResponse } from "http";

export type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
export const routes: Map<string, Map<string, RouteHandler>> = new Map();


function addRoutes(method: string, path: string, handler: RouteHandler) {
    // 1. Check if method exists in main routes map
    if(!routes.has(method)) {
        // 2. If not, create a new sub-map for this method
        routes.set(method, new Map());  // <-- THIS LINE
    }
    
    // 3. Get the method's map and add the path-handler pair
    routes.get(method)!.set(path, handler);
}

export default addRoutes;