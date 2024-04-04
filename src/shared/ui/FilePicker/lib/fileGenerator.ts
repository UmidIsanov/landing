export const fileGenerator = function* (files: FileList) {
  for (let i = 0; i < files.length; i++) {
    yield files.item(0);
  }
};
