async function initializeExtension() {
  console.log("Extension initialized");

  function clearBrowser() {
    window.localStorage.clear();
    document.cookie = "";
  }

  clearBrowser();
  const interval = setInterval(clearBrowser, 500);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Extension cleared");
  }, 5000);
}

if (typeof extensionInit === "undefined") {
  const extensionInit = async function () {
    await initializeExtension();
  };
  extensionInit();
}
