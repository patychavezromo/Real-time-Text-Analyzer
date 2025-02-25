export const wordCounter = (text) => {
  if (text === "") {
    return 0;
  }
  return text.trim().split(/\s+/).length;
};

export const characterCounter = (text) => {
  return text.length > 0 ? text.length : 0;
};
