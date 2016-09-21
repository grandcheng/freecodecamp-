    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Drop-It
    //让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
    //第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
    //最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。
    //我的方法
    function drop(arr, func) {
        // Drop them elements.
        while(!func(arr[0])){
            arr.shift();
        }
        return arr;
    }

    //官方的basic方法
    function dropElements(arr, func) {
        // drop them elements.
        var times = arr.length;
        for (var i = 0; i < times; i++) {
            if (func(arr[0])) {
                break;
            } else {
                arr.shift();
            }
        }
        return arr;
    }


    //官方的intermediate方法
    function dropElements(arr, func) {
        return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
    }

    
    //官方的advanced方法
    function dropElements(arr, func) {
        while(arr.length > 0 && !func(arr[0])) {
            arr.shift();
        }
        return arr;
    }

    drop([1, 2, 3], function(n) {return n < 3; });