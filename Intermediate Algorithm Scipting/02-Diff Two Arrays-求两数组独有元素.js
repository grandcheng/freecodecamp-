
    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Diff-Two-Arrays
    //比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
    //我的方法
    function diff(arr1, arr2) {
        var newArr = [];
        arr1.filter(function(val){
            if(arr2.indexOf(val)==-1){
                newArr = newArr.concat(val);
                return newArr;
            }
        });
        arr2.filter(function(val){
            if(arr1.indexOf(val)==-1){
                newArr = newArr.concat(val);
                return newArr;
            }
        });
        return newArr;
    }


    //官方的basic方法
    function diffArray(arr1, arr2) {
        var newArr = [];
        // Looping through arr1 to find elements that do not exist in arr2
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1){
                // Pushing the unique to arr1 elements to the newArr
                newArr.push(arr1[i]);
            }
        }
        // Looping through arr2 to find elements that do not exist in arr1
        for (var j = 0; j < arr2.length; j++) {
            if (arr1.indexOf(arr2[j]) === -1){
                // Pushing the unique to arr2 elements to the newArr
                newArr.push(arr2[j]);
            }
        }

        return newArr;
    }

    //官方的intermediate方法
    function diffArray(arr1, arr2) {
        return arr1
                .concat(arr2)
                .filter(
                item => !arr1.includes(item) || !arr2.includes(item)
    )
    }

    //官方的advanced方法
    function diffArray(arr1, arr2) {
        return arr1
                .filter(el => !arr2.includes(el))
    .concat(
            arr2.filter(el => !arr1.includes(el))
    )
    }

    diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);