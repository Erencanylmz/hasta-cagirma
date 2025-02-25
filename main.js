const { app, BrowserWindow, Menu } = require('electron');
const port = 80;

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title:"HASTA ÇAĞIRMA",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            nativeWindowOpen: true,

        }
    });

    win.loadURL(`http://localhost:${port}/`);
      win.on("page-title-updated", (event) => {
      event.preventDefault(); 
    });
 /*    win.loadURL(`http://localhost:${port}/panel1`);
      win.on("page-title-updated", (event) => {
      event.preventDefault(); 
    });
    win.loadURL(`http://localhost:${port}/panel2`);
      win.on("page-title-updated", (event) => {
      event.preventDefault(); 
    }); */
    
}

app.whenReady().then(createWindow);

Menu.setApplicationMenu(null);





app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

