export let wordCounter = (text) => {
  if (text === "") {
    return 0;
  }
  return text.trim().split(/\s+/).length;
};


