const Minio = require("minio");

var minioClient = new Minio.Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});

const server = require("express")();

server.get("/presignedUrl", (req, res) => {
  minioClient.presignedGetObject("test", req.query.name, (err, url) => {
    if (err) throw err;
    res.end(url);
  });
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(8080);
