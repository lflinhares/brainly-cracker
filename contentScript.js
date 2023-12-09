async function initializeExtension() {
  console.log("Extension initialized");
}

if (typeof extensionInit === "undefined") {
  const extensionInit = async function () {
    await initializeExtension();
  };
  extensionInit();
}
