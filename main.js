const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icon.ico'), // Tu icono para la barra de tareas
    webPreferences: {
      nodeIntegration: true,
    }
  })

  // En producción, carga el archivo html compilado
  // En desarrollo, podrías cargar localhost si quisieras, pero aquí nos enfocamos en el EXE
  win.loadFile(path.join(__dirname, 'dist', 'index.html'))
  
  // Opcional: Quitar el menú superior de "Archivo, Editar..."
  win.setMenuBarVisibility(false) 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})