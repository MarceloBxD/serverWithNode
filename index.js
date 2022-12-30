const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end(JSON.stringify({ message: "Pagina inicial" }));
    } else if (req.url === "/usuarios") {
      res.end(JSON.stringify({ message: "Pagina de usuario" }));
    } else if (req.url === "/produtos") {
      res.end(JSON.stringify({ message: "Pagina de produtos" }));
    }
  })
  .listen(3000, () => {
    console.log("Server running on port 3000");
  });
