    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sorted-Union
    //写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
    //换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
    //非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
    //我的方法
    function unite(arr1, arr2, arr3) {
        var result = [];
        for(var i=0;i<arguments.length;i++){
            arguments[i].every(function(val){
                if(result.indexOf(val)==-1){
                    result.push(val);
                }
                return val;
            });
        }
        return result;
    }

    //官方的basic方法
    function uniteUnique(arr1, arr2, arr3) {
        // Creates an empty array to store our final result.
        var finalArray = [];

        // Loop through the arguments object to truly made the program work with two or more arrays
        // instead of 3.
        for (var i = 0; i < arguments.length; i++) {
            var arrayArguments = arguments[i];

            // Loops through the array at hand
            for (var j = 0; j < arrayArguments.length; j++) {
                var indexValue = arrayArguments[j];

                // Checks if the value is already on the final array.
                if (finalArray.indexOf(indexValue) < 0) {
                    finalArray.push(indexValue);
                }
            }
        }

        return finalArray;
    }

    //官方的intermediate方法
    function uniteUnique(arr1, arr2, arr3) {
        var newArr;
        //Convert the arguments object into an array
        var args = Array.prototype.slice.call(arguments);
        //Use reduce function to flatten the array
        newArr = args.reduce(function(arrA,arrB){
            //Apply filter to remove the duplicate elements in the array
            return arrA.concat(arrB.filter(function(i){
                return arrA.indexOf(i) === -1;
            }));
        });

        return newArr;
    }

    //官方的advanced方法
    function uniteUnique() {
        var concatArr = [];
        var i = 0;
        while (arguments[i]){
            concatArr = concatArr.concat(arguments[i]); i++;
        }
        uniqueArray = concatArr.filter(function(item, pos) {
            return concatArr.indexOf(item) == pos;
        });
        return uniqueArray;
    }


    unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);