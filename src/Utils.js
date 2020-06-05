const formatShells = (shells) => {
  if (!Array.isArray(shells)) {
    return "";
  }
  return shells.join("-");
};

const formatElectronConfiguration = (config) => {
  if (typeof config !== "string") {
    return config;
  }
  return config.split(" ").join("-");
};

const googleSearch = (name) => {
  return typeof name === "string"
    ? "https://www.google.com/search?q=" + name.split(" ").join("+")
    : "#0";
};

export { formatShells, formatElectronConfiguration, googleSearch };
