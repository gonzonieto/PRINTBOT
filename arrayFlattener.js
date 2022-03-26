const arrayFlattener = (arr) => {
  if (!Array.isArray(arr)) return arr;
  if (arr.length === 1) {

    if (Array.isArray(arr[0])) {
      return arrayFlattener(arr[0]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arrayFlattener(arr[i]);
  }
  return arr;
};

module.exports = { arrayFlattener };