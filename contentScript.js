async function initializeExtension() {
  console.log("Extension initialized");

  async function breakWalls() {
    document.body.style.position = "static";

    document.head.innerHTML += `<style>.sg-dialog__overlay { display: none !important; width: 0 !important; height: 0 !important; }</style>`;
  }

  function clearTracks() {
    window.localStorage.clear();
    document.cookie = "";
  }

  breakWalls();
  clearTracks();
  const interval = setInterval(() => {
    clearTracks();
  }, 500);

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
