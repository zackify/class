## Reading code

Read code from the inside out:

```js
console.log(
  add(
    multiply(          2,4         ), // 4
    divide(          24, '38273'   ), // 4
    add(
      multiply(  2,4  ), 5
      
    ) //4
  )
)
```
Whatever is indented the most, is going to be evaluated first.



How would I find what is broke here?

Let's first look at the most nested function:

```js
add(
  multiply(2,4), 
  5
)

```
multiply is the inner most nested, because it is being called as a parameter at the most nested level.