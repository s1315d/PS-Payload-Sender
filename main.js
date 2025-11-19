const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

function resolveServerPath() {
  const dev = path.join(__dirname, 'server.js');
  const prod = path.join(process.resourcesPath, 'app.asar.unpacked', 'server.js');
  if (fs.existsSync(dev)) return dev;
  return prod;
}

let serverModule;

function startServer() {
  try {
    const serverPath = resolveServerPath();
    serverModule = require(serverPath);
  } catch (e) {
    console.error("Server error:", e);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: { contextIsolation: true }
  });

  win.loadURL("http://127.0.0.1:3000");
}

app.whenReady().then(() => {
  startServer();
  setTimeout(createWindow, 500);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
