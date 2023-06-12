// const { app, BrowserWindow } = require('electron');

// let mainWindow;

// const createWindow = () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//   });

//   mainWindow.loadURL('http://localhost:3000');
// };

// app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });


const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
