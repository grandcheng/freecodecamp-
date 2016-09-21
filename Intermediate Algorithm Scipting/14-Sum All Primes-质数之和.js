    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sum-All-Primes
    //求小于等于给定数值的质数之和。
    //只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
    //给定的数不一定是质数。
    //我的方法
    function sumPrimes(num) {
        var result = 0;
        function isPrime(val){
            for(var i=2;i<val;i++){
                if(val%i==0){
                    return false;
                }
            }
            return true;
        }
        for(var i=2;i<=num;i++){
            if(isPrime(i)){
                result+=i;
            }
        }
        console.log(result);
        return result;
    }

    //官方的basic方法
    function sumPrimes(num) {
        var res = 0;

        // Function to get the primes up to max in an array
        function getPrimes(max) {
            var sieve = [];
            var i;
            var j;
            var primes = [];
            for (i = 2; i <= max; ++i) {
                if (!sieve[i]) {
                    // i has not been marked -- it is prime
                    primes.push(i);
                    for (j = i << 1; j <= max; j += i) {
                        sieve[j] = true;
                    }
                }
            }

            return primes;
        }

        // Add the primes
        var primes = getPrimes(num);
        for (var p = 0; p < primes.length; p++) {
            res += primes[p];
        }

        return res;
    }

    //官方的intermediate方法
    function sumPrimes(num) {
        // function to check if the number presented is prime
        function isPrime(number){
            for (i = 2; i <= number; i++){
                if(number % i === 0 && number!= i){
                    // return true if it is divisible by any number that is not itself.
                    return false;
                }
            }
            // if it passes the for loops conditions it is a prime
            return true;
        }
        // 1 is not a prime, so return nothing, also stops the recursive calls.
        if (num === 1){
            return 0;
        }
        // Check if your number is not prime
        if(isPrime(num) === false){
            // for non primes check the next number down from your maximum number, do not add anything to your answer
            return sumPrimes(num - 1);
        }

        // Check if your number is prime
        if(isPrime(num) === true){
            // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
            return num + sumPrimes(num - 1);
        }
    }

    sumPrimes(10);