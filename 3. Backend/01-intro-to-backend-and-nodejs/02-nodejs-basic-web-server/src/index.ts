import http, { IncomingMessage, ServerResponse } from "http";

import { users } from "./data/users.js";

const PORT = process.env.PORT || 8000;
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there! This is a Vanilla Node.js API");
        res.end();
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("This is the about page");
        res.end();
      } else if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write("Endpoint not found");
        res.end();
      }
    } else if (req.method === "POST") {
      if (req.url === "/register") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          const userData = JSON.parse(body);
          users.push({ ...userData, id: users.length + 1 });
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "User has been registered",
              data: userData,
            })
          );
        });
      }
    } else if (req.method === "PUT") {
      if (req.url === "/update-user/1") {
        const userID = parseInt(req.url.split("/")[2]);
        const user = users.find((product) => product.id === userID);

        if (user) {
          const updatedData = {
            id: userID,
            name: "New Name",
            email: "new@email.org",
          };
          const index = users.indexOf(user);
          users[index] = updatedData;
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: "User updated sucessfully", updatedData })
          );
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "User not found" }));
        }
      }
    } else if (req.method === "DELETE") {
      if (req.url === "/delete-user/1") {
        const userID = parseInt(req.url.split("/")[2]);
        const user = users.find((users) => users.id !== userID);

        if (user) {
          const index = users.indexOf(user);
          users.splice(index, 1);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "User deleted successfully",
              data: user,
            })
          );
        }
      }
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
