const { app, BrowserWindow } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({ width: 800, height: 600, titleBarStyle: 'hidden' })
  win.show()
  win.loadFile('index.html')
}
 
app.on('ready', createWindow)