const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = 5500;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

http
  .createServer((request, response) => {
    let requestPath = decodeURIComponent(request.url.split("?")[0]);
    if (requestPath === "/") {
      requestPath = "/index.html";
    }

    const filePath = path.join(root, requestPath);
    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      const extension = path.extname(filePath).toLowerCase();
      response.writeHead(200, {
        "Content-Type": contentTypes[extension] || "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(port, "0.0.0.0");
