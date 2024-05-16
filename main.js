const path = require("path");
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    maxHeight: 600,
    minHeight: 600,
    maxWidth: 600,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.setMenu(null)

  win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
})