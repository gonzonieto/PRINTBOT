const { assert } = require('chai');
const { arrayFlattener } = require('../arrayFlattener.js');
const { arrayFlattenerWithText } = require('../arrayFlattenerWithText.js');

const TAB = '          ';

console.clear();
process. stdout. write('PRINTBOT is undergoing functional testing. Please stand by.');

describe("arrayFlattener(arr)\n" + TAB + "- Removes unnecessary nesting from input array\n", () => {

  // it('when passed 1\n' + TAB + 'returns 1\n', () => {
  //   const testArr = 1;
  //   assert.equal(arrayFlattener(testArr), 1);
  // });

  // it('when passed "bob"\n' + TAB + 'returns "bob"\n', () => {
  //   const testArr = "bob";
  //   assert.equal(arrayFlattener(testArr), "bob");
  // });

  // it('when passed [1]\n' + TAB + 'returns [1]\n', () => {
  //   const testArr = [1];
  //   assert.deepEqual(arrayFlattener(testArr), [1]);
  // });
  
  // it('when passed [[1]]\n' + TAB + 'returns  [1]\n', () => {
  //   const testArr = [[1]];
  //   assert.deepEqual(arrayFlattener(testArr), [1]);
  // });
  
  // it('when passed [1, 2]\n' + TAB + 'returns [1, 2]\n', () => {
  //   const testArr = [1, 2];
  //   assert.deepEqual(arrayFlattener(testArr), [1, 2]);
  // });

  it('when passed [[1, 2]]\n' + TAB + 'returns [1, 2]\n', () => {
    const testArr = [[1, 2]];
    assert.deepEqual(arrayFlattener(testArr), [1, 2]);
  });

  it('when passed [[1, [[[2]]]]]\n' + TAB + 'returns [1, [2]]\n', () => {
    const testArr = [[1, [[[2]]]]];
    assert.deepEqual(arrayFlattener(testArr), [1, [2]]);
  });

  it('when passed [[1]]\n' + TAB + 'returns [1]', () => {
    const testArr = [[1]];
    assert.deepEqual(arrayFlattener(testArr), [1]);
  });
  
  it('  returns [1] when passed [[[[1]]]]', () => {
    const testArr = [[[[1]]]];
    assert.deepEqual(arrayFlattener(testArr), [1]);
  });

  it('  returns [] when passed [[[[]]]]', () => {
    const testArr = [[[[]]]];
    assert.deepEqual(arrayFlattener(testArr), []);
  });

  it('  returns [1, 2, 3, 4, 5] when passed [[1, 2, 3, 4, 5]]', () => {
    const testArr = [[1, 2, 3, 4, 5]];
    assert.deepEqual(arrayFlattener(testArr), [1, 2, 3, 4, 5]);
  });

  it('  returns [1, 2, [3, 4], 5] when passed [[1, 2, [3, 4], 5]]', () => {
    const testArr = [[1, 2, [3, 4], 5]];
    assert.deepEqual(arrayFlattener(testArr), [1, 2, [3, 4], 5]);
  });

  it('  returns [1, 2, [3, 4], 5] when passed [[1, 2, [[[[3, 4]]]], 5]]', () => {
    const testArr = [[1, 2, [[[[3, 4]]]], 5]];
    assert.deepEqual(arrayFlattener(testArr), [1, 2, [3, 4], 5]);
  });

  it('  returns [[1, 2], [3, 4], [5]] when passed [[[[[[[1, 2]]]]], [[[[3, 4]]]], [[[5]]]]]', () => {
    const testArr = [[[[[[[1, 2]]]]], [[[[3, 4]]]], [[[5]]]]];
    assert.deepEqual(arrayFlattener(testArr), [[1, 2], [3, 4], [5]]);
  });
  
  it("  returns [['a', 1], ['b', 2], ['c', ['d', [['e', 5], ['f', 6]]]]]\n" + TAB + "when passed [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]", () => {
    const testArr = [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]];
    assert.deepEqual(arrayFlattener(testArr), [['a', 1], ['b', 2], ['c', ['d', [['e', 5], ['f', 6]]]]]);
  });
});

describe("arrayFlattenerWithText(arr)\n" + TAB + "- Removes unnecessary nesting from input array\n", () => {

  // it('when passed 1\n' + TAB + ' returns 1\n', () => {
  //   const testArr = 1;
  //   assert.equal(arrayFlattenerWithText(testArr), 1);
  // });

  // it('when passed "bob"\n' + TAB + 'returns "bob"\n', () => {
  //   const testArr = "bob";
  //   assert.equal(arrayFlattenerWithText(testArr), "bob");
  // });

  // it('when passed [1]\n' + TAB + 'returns  [1]\n', () => {
  //   const testArr = [1];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1]);
  // });
  
  // it('when passed [[1]]\n' + TAB + 'returns  [1]\n', () => {
  //   const testArr = [[1]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1]);
  // });
  
  // it('when passed [1, 2]\n' + TAB + 'returns [1, 2]\n', () => {
  //   const testArr = [1, 2];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, 2]);
  // });

  // it('when passed [[1, 2]]\n' + TAB + 'returns [1, 2]\n', () => {
  //   const testArr = [[1, 2]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, 2]);
  // });

  // it('when passed [[1, [[[2]]]]]\n' + TAB + 'returns [1, [2]]\n', () => {
  //   const testArr = [[1, [[[2]]]]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, [2]]);
  // });

  // it('  returns [1] when passed [[1]]', () => {
  //   const testArr = [[1]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1]);
  // });
  
  // it('  returns [1] when passed [[[[1]]]]', () => {
  //   const testArr = [[[[1]]]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1]);
  // });

  // it('  returns [] when passed [[[[]]]]', () => {
  //   const testArr = [[[[]]]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), []);
  // });

  // it('  returns [1, 2, 3, 4, 5] when passed [[1, 2, 3, 4, 5]]', () => {
  //   const testArr = [[1, 2, 3, 4, 5]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, 2, 3, 4, 5]);
  // });

  // it('  returns [1, 2, [3, 4], 5] when passed [[1, 2, [3, 4], 5]]', () => {
  //   const testArr = [[1, 2, [3, 4], 5]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, 2, [3, 4], 5]);
  // });

  // it('  returns [1, 2, [3, 4], 5] when passed [[1, 2, [[[[3, 4]]]], 5]]', () => {
  //   const testArr = [[1, 2, [[[[3, 4]]]], 5]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [1, 2, [3, 4], 5]);
  // });

  // it('  returns [[1, 2], [3, 4], [5]] when passed [[[[[[[1, 2]]]]], [[[[3, 4]]]], [[[5]]]]]', () => {
  //   const testArr = [[[[[[[1, 2]]]]], [[[[3, 4]]]], [[[5]]]]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [[1, 2], [3, 4], [5]]);
  // });
  
  // it("  returns [['a', 1], ['b', 2], ['c', ['d', [['e', 5], ['f', 6]]]]]\n" + TAB + "when passed [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]", () => {
  //   const testArr = [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]];
  //   assert.deepEqual(arrayFlattenerWithText(testArr), [['a', 1], ['b', 2], ['c', ['d', [['e', 5], ['f', 6]]]]]);
  // });
});