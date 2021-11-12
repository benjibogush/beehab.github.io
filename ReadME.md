>>>> Here you may find basic algorithms that accounted in Big O notation
> but not limited to the entire list of time complexities. 
> Given time, this may be developed further to account for more input types.
>  However it is not recommended since it gets very complicated by given value over time.

## Constant time complexity example

### if(N<10){
###    println()
### }

## Example 1: Basic O(N) notation

### for(int i = 0; i < N; i++) {
###     println(i);
### }

## Example 1b: Basic O(N) notation

### for(int i = N; i >= 0; i--) {
###    println(i);
### }

## Example 2: Basic O(logN) notation v1
#### for(int i =0; i < N; i *= 2) {
####   println(i);
#### }


## Example 3: Basic O(logN) notation v2

### for(int i = N-1; i < N; i/=2) {
###    println(i);
### }

## Example 4: Basic O(N^2) notation v2

### for(int i = 0; i < N; i++) {
###    for(int j = 1; j < N; j++) {
###        println(i);
###        print(j);
###    }
### }

## Example 5: Basic O(N^2) notation v2

### for(int i = N-1; i >= 0; i--) {
###    for(int j = N - 2; j >= 0; j--) {
###        println(i);
###        println(j);
###    }
### }

### Parse what in Python:

    This will be a very complex to implement.
    -- Its going to use for {var} in {list} every time. However,  range input should be accounted for.
    -- range(end, start, skip) 

### Parse what in Java:
    -- It could use for(;;) notation or for(x : list) notation or it can be while notation, nontheless, not worth it do apply.
    -- If the last column of the for(;;) notation is ++ or -- or += or -=, we have O(N)
    -- If the last column of the for(;;) notation is /= or *=, we have O(logN)
    -- If the first column is based on (N.length - a value) -> This is going to be a fixed value. So this is O(1)
    -- Determining merge sort or quicksort algorithms wouldn't be very easy...time needed to focus on this last part
    -- Finally if there is an infinite loop, tell the user.

## Edge use case example:
### There are many cases we can account for and there is tons of more use cases we may not be able to code given limited time.

### while(N<1000 && N=N*N){
###     for(int i=0; i<N; i=*2){
###            println()
###     }
### }

