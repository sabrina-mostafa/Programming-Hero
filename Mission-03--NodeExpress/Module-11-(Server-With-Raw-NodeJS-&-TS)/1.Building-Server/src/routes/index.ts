import { readUsers, writeUsers } from "../helpers/fileDb";
import parsedBody from "../helpers/parseBody";
import addRoutes from "../helpers/routeHandler";
import sendJson from "../helpers/sendJson";

// ------------------ root route ------------------
addRoutes("GET", "/", (req, res) => {
    sendJson(res, 200, {
        message: "Hello World",
        path: req.url
    })
});
// ------------------------------- manual -------------------------------

// if (req.url == "/" && req.method == "GET") {    
// res.writeHead(200, { "contentType": "application/json" });
// res.end(JSON.stringify({
//     message: "Hello World",
//     path: req.url
// }))
// }


// ------------------ health route ------------------
addRoutes("GET", "/api", (req, res) => {
    sendJson(res, 200, {
        message: "Health status OK",
        url: req.url
    })
})
// ------------------------------- manual -------------------------------

// if (req.url == "/api" && req.method == "GET") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify({
//         message: "Health status OK",
//         url: req.url
//     }))
// }



// ------------- users route -------------
addRoutes("POST", "/api/users", async (req, res) => {
    const body = await parsedBody(req);

    // user json read
    const users = readUsers();

    const newUser = {
        ...body,
    };
    users?.push(newUser);

    writeUsers(users);

    sendJson(res, 201, { success: true, data: body });
})
// ------------------------------- manual -------------------------------

// if (req.url == "/api/users" && req.method == "POST") {

//     let body = '';

//     // listen for data chunk 
//     req.on("data", (chunk) => {
//         body += chunk.toString();
//     });
//     req.on("end", () => {
//         try {
//             const parsedBody = JSON.parse(body);
//             console.log(body);
//             console.log(parsedBody);
//             console.log("catching current changes...")

//             res.end(JSON.stringify(parsedBody));
//         }
//         catch (err: any) {
//             res.end(JSON.stringify({
//                 message: err?.message,
//             }))
//         }
//     })
// }



// ----------------- Update Users (PUT) route -------------------
addRoutes("PUT", "/api/users/:id", async (req, res) => {
    const { id } = (req as any).params;
    const body = await parsedBody(req);

    const users = readUsers();

    const index = users.findIndex((user: any) => user.id == id);

    // if not found
    if (index === -1) {
        sendJson(res, 404, {
            success: false,
            message: "user not found",
        });
    }

    users[index] = {
        ...users[index],
        ...body,
    };

    writeUsers(users);

    sendJson(res, 202, {
        success: true,
        message: `id ${id} user updated`,
        data: users[index],
    });
});


// ----------------- Delete Users route -------------------
addRoutes("DELETE", "/api/users/:id", async (req, res) => {
    const { id } = (req as any).params;
    const users = readUsers();

    // Find index of user to delete
    const index = users.findIndex((user: any) => user.id == id);

    // If user not found
    if (index === -1) {
        return sendJson(res, 404, {
            success: false,
            message: `User with id ${id} not found`,
        });
    }

    // Store the deleted user before removing
    const deletedUser = users[index];

    // Remove user from array
    users.splice(index, 1);

    // Save updated array to file
    writeUsers(users);

    // Send success response
    sendJson(res, 200, {
        success: true,
        message: `User with id ${id} deleted successfully`,
        data: deletedUser,  // Optionally return the deleted user
    });
});