async function initializeExtension() {
  console.log("Extension initialized");

  function topbar() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0px";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "20px";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.backgroundColor = "green";
    container.style.zIndex = "999999";
    container.innerHTML = "Adwalls broken and cookies cleared.";
    container.style.color = "white";
    container.style.transition = "all 0.5s";
    container.style.textOverflow = "ellipsis";
    container.style.textAlign = "center";

    document.body.appendChild(container);

    setTimeout(() => {
      container.style.top = "-20px";
      setTimeout(() => {
        container.remove();
      }, 600);
    }, 4000);

    container.onclick = () => {
      container.remove();
    };
  }

  async function breakWalls() {
    document.body.style.position = "static";
    document.head.innerHTML += `<style>.sg-dialog__overlay { display: none !important; width: 0 !important; height: 0 !important; }</style>`;
  }

  function clearTracks() {
    window.localStorage.clear();
    document.cookie = "";
  }

  topbar();
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
