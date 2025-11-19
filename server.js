const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

const base = process.resourcesPath;  
const uploadDir = path.join(base, "uploads");

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const app = express();
const upload = multer({ dest: uploadDir });

const webDev = path.join(__dirname, "web");
const webProd = path.join(process.resourcesPath, "app.asar.unpacked", "web");
const webPath = fs.existsSync(webDev) ? webDev : webProd;

app.use(express.static(webPath));
app.use(express.urlencoded({ extended: true }));

app.post("/send", upload.single("file"), (req, res) => {
  const { ip, port } = req.body;
  const file = req.file.path;

  const nc = spawn("nc", [ip, port], { stdio: ["pipe", "ignore", "ignore"] });
  fs.createReadStream(file).pipe(nc.stdin);

  nc.on("close", () => {
    try { fs.unlinkSync(file); } catch {}
    res.json({ success: true, msg: "Payload sent" });
  });

  nc.on("error", err => {
    try { fs.unlinkSync(file); } catch {}
    res.json({ success: false, msg: err.message });
  });
});

let serverInst = app.listen(3000, "127.0.0.1");
module.exports = { stop: ()=>serverInst.close() };
