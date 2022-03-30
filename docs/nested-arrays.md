# Nested array -> nested object conversion, pt. 1

## Forethought
Our objective is to convert the following nested array into a nested object:

    [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]

A two-element array can be directly converted to an object with Object.fromEntries():

    ['a', 1] --> { a: 1 }

This is the smallest array that we can convert to an object.

An array of valid arrays can be converted to an object with multiple key:value pairs:

    [['a', 1], ['b', 2]] --> {a: 1, b: 2}

Nested arrays will need a more careful approach in order to avoid a partial conversion:

      [[ 'a', 1 ], [ 'b', [[ 'c', 3 ]]]]
                    \   /
                     \ /
        { a: 1,       b:  [[ 'c', 3 ]]}  <-- INCORRECT

        { a: 1,       b:    { c:  3 }}   <--   CORRECT

The issue here is that [[ 'c', 3 ]] has unnecessary nesting that is preventing direct conversion to an object.

[[ 'c', 3 ]] is an array with one item, which is itself an array. Since an array with one item cannot itself be converted into an object, a naive conversion assigns [[ 'c', 3 ]] as the value for key 'b' — see the INCORRECT example given above.

To avoid this problem, the first step of our algorithm will need to find and remove any unnecessary nesting. We are looking for arrays that have only one element which is itself an array.

## Getting started
The array we want to convert is:
```
[['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]
```

We can also visualize it like this:
```
    [
      [ 'a', 1 ],
      [ 'b', 2 ],
      [ 'c', [
        [ 'd', [  
          [ 'e', 5 ],
          [ 'f', 6 ]
        ]]
      ]]
    ]
```
## Iterating through the array
Let's iterate through the array and see what we find.

```
Analyzing: [[ 'a', 1 ], [ 'b', 2 ], [ 'c', [[ 'd', [[ 'e', 5 ], [ 'f', 6 ]]]]]]
Number of elements: 3

Is this an array with one item that is itself an array? *NO*
Let's zoom in and look at each of its elements.
```
```
Analyzing: [ 'a', 1 ]
Number of elements: 2

Is this an array with one item that is itself an array? *NO*
Moving along!
```
```
Analyzing: [ 'b', 2 ]
Number of elements: 2

Is this an array with one item that is itself an array? *NO*
Moving along!
```
```
Analyzing: [ 'c', [[ 'd', [[ 'e', 5 ], [ 'f', 6 ]]]]]
Number of elements: 2

Is this an array with one item that is itself an array? *NO*
```
Let's look at the sub-array in the second element:
```
Analyzing: [[ 'd', [[ 'e', 5 ], [ 'f', 6 ]]]]
Number of elements: 1

AHA! An array with one element which is itself an array.
```
Notice the double square brackets on the outside of this array.
This is unnecessary nesting that we will need to remove before attempting transformation.

```
Original:       [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]
Flatten result: [['a', 1], ['b', 2], ['c', [ 'd', [['e', 5], ['f', 6]]]]]
```

Let's continue.
```
Analyzing: [ 'd', [ [ 'e', 5 ], [ 'f', 6 ] ] ]
Number of elements: 2

Can this array be directly converted to an object? *NO*
Moving along!
```
```
Checking for subarrays of [ 'd', [ [ 'e', 5 ], [ 'f', 6 ] ] ]
Found a sub-array in the second element! Let's take a look at it.
```
```
Analyzing: [ [ 'e', 5 ], [ 'f', 6 ] ]
Number of elements: 2

Can this array be directly converted to an object? *YES*
Moving along!
```
The array no longer has any unnecessary nesting. We can now proceed with conversion!
