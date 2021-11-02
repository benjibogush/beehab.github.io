>>>> Here you may find basic algorithms that accounted in Big O notation
> but not limited to the entire list of time complexities. 
> Given time, this may be developed further to account for more input types.
>  However it is not recommended since it gets very complicated by given value over time.
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
    1. Its going to use for {var} in {list} every time. However, we'd need to account for the range input
    2. range(end, start, skip) 

### Parse what in Java:
    1. It could use for(;;) notation or for(x : list) notation
        1a. Or it could be while notation...lol. This will be such a bitch to look at.
        
    2. If the last column of the for(;;) notation is ++ or -- or += or -=, we have O(N)
    3. If the last column of the for(;;) notation is /= or *=, we have O(logN)
    4. If the first column is based on (N.length - a value) -> This is going to be a fixed value. So this is O(1)
    5. Determining merge sort or quicksort algorithms wouldn't be very easy...might need to focus on this last
    6. If we have an infinite loop, tell the user.



