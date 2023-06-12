
const { remote } = require('electron');

document.getElementById('login').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow();
  const newWindow = new remote.BrowserWindow({ width: 1000, height: 650 });

  newWindow.loadURL(`file://${__dirname}/final_chart.html`);
  // currentWindow.close();
});
