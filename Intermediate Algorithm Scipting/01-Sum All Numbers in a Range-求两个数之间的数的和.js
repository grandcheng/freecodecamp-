    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sum-All-Numbers-In-A-Range
    //我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
    //最小的数字并非总在最前面。
    //我的方法
    function sumAll(arr) {
        return (arr[0]+arr[1])*(Math.abs(arr[0]-arr[1])+1)/2;
    }


    //官方的basic方法
    function sumAll(arr) {
        var max = Math.max(arr[0], arr[1]);
        var min = Math.min(arr[0], arr[1]);
        var temp = 0;
        for (var i=min; i <= max; i++){
            temp += i;
        }
        return(temp);
    }

    //官方的intermediate方法
    function sumAll(arr) {
        // Buckle up everything to one!

        // Using ES6 arrow function (one-liner)
        var sortedArr = arr.sort((a,b) => a-b);
        var firstNum = arr[0];
        var lastNum = arr[1];
        // Using Arithmetic Progression summing formula

        var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
        return sum;
    }


    //官方的advanced方法
    function sumAll(arr) {
        var sum = 0;
        for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
            sum += i;
        }
        return sum;
    }

    sumAll([1, 4]);

