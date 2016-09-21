    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Finders-Keepers
    //写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
    //我的方法
    function find(arr, func) {
        var num = 0;
        for(var i=0;i<arr.length;i++) {
            if(func(arr[i])) {
                return arr[i];
            }
        }
    }

    //官方的basic方法
    function findElement(arr, func) {
        // Make num undefined by default
        var num;

        // Loop thorugh the array and use the function to check
        for (var a = 0; a < arr.length; a++) {
            if (func(arr[a])) {
                // Store the first case and break the loop
                num = arr[a];
                return num;
            }
        }

        // otherwise return undefined
        return num;
    }

    findElement([1, 2, 3, 4], function(num) {
        return num % 2 === 0;
    });

    //官方的intermediate方法
    function findElement(arr, func) {
        filterArr = arr.filter(func); //filter array with the function provided

        return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
    }

    
    find([1, 2, 3, 4], function(num){ return num % 2 === 0; });