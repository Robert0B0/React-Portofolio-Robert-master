export const importAllImages = (folderPath) => {
  const images = require.context(folderPath, false, /\.(png|jpe?g|svg)$/);
  return images.keys().map(images);
};
