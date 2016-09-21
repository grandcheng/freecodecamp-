    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sum-All-Odd-Fibonacci-Numbers
    //返回所有小于传入数值的斐波那契数列中的奇数之和，如果传入的数值是斐波那契数，那么它也应该参与求和。
    //斐波那契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
    //例如，向 function 传入 4 应该返回 5，因为斐波那契数列中所有小于 4 的奇数是 1、1、3。
    //我的方法
    function sumFibs(num) {
        var result = 1;
        var prefi = 1;
        var nextfi = 1;
        var temp;
        while(nextfi <= num){
            temp = nextfi;
            nextfi  = prefi + nextfi;
            prefi = temp;
            if(prefi % 2==1){
                result += prefi;
            }
        }
        return result;
    }


    //官方的basic方法
    function sumFibs(num) {
        var prevNumber = 0;
        var currNumber = 1;
        var result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
                result += currNumber;
            }

            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
    }

    //官方的intermediate方法
    function sumFibs(num) {
        // create an array of fib numbers till num
        var arrFib = [1];
        for (var i = 1; i <=num;) {
            arrFib.push(i);
            i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
        }

        // return the sum of odd numbers from the array
        var res = arrFib.reduce(function(prev, curr) {
            if (curr%2 !== 0) return prev + curr;
            else return prev;
        });

        return res;
    }


    sumFibs(4);
