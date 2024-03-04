if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('sw registrado', reg))
    .catch((err) => console.log('sw não registrado', err));
}

    // main.js

    let installPrompt = null;
    const installButton = document.querySelector("#btn-instalar");
    
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;
      installButton.removeAttribute("hidden");
    });


    // main.js

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  });
  
  function disableInAppInstallPrompt() {
    installPrompt = null;
    installButton.setAttribute("hidden", "");
  }
  

  // main.js

window.addEventListener("appinstalled", () => {
    disableInAppInstallPrompt();
  });
  
  function disableInAppInstallPrompt() {
    installPrompt = null;
    installButton.setAttribute("hidden", "");
  }
  