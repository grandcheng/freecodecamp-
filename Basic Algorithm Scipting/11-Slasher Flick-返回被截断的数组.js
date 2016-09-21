    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Slasher-Flick
    //返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
    //我的方法&官方的basic方法
    function slasher(arr, howMany) {
        // it doesn't always pay to be first
        arr.splice(0,howMany);
        return arr;
    }

    //官方的intermediate方法
    function slasher(arr, howMany) {
        // Return string after the amount chopped off.
        return arr.slice(howMany);
    }

    slasher([1, 2, 3], 2);