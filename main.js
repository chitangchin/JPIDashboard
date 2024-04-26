const { app, BrowserWindow } = require('electron/main');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    // win.webContents.openDevTools(); Not working at the moment
    win.loadFile('index.html');
}

app.on('ready', () => {
    createWindow();
})