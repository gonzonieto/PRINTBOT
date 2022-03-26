let counter = 1;

const arrayFlattenerWithText = (arr) => {
  console.log();
  const instanceCount = counter;
  counter++;
  console.log(`arrayFlattener() instance ${instanceCount}`);
  console.log('Now looking at | ', arr);
  //If it's not an array, return it unmodified
  if (!Array.isArray(arr)) return arr;
  //If it is an array, return itself to catch unneeded nesting
  if (arr.length === 1) {
    if (Array.isArray(arr[0])) {
      console.log('This array consists of just one item which is itself an array!');
      return arrayFlattenerWithText(arr[0]);
    }
  }
  //If we're here, it's an array with 2 or more elements
  //Or with one element that doesn't have unnecessary nesting
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arrayFlattenerWithText(arr[i]);
  }
  // console.log(`now closing arrayFlattener() instance ${instanceCount}`);
  return arr;
};
module.exports = { arrayFlattenerWithText };