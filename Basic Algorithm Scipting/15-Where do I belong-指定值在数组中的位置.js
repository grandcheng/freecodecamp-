    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Where-Do-I-Belong
    //先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
    //举例：where([1,2,3,4], 1.5) 应该返回 1。因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1。
    //同理，where([20,3,5], 19) 应该返回 2。因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2。
    //我的方法
    function where(arr, num) {
        // Find my place in this sorted array.
        arr.push(num);
        arr.sort(function(a,b){
            return a-b;
        });
        return arr.indexOf(num);
    }

    //官方的basic方法
    function getIndexToIns(arr, num) {
        arr.sort(function(a, b) {
            return a - b;
        });
        for (var a = 0; a < arr.length; a++) {
            if (arr[a] >= num)
                return parseInt(a);
        }
        return arr.length;
    }

    //官方的intermediate方法
    function getIndexToIns(arr, num) {
        // sort and find right index
        var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
        // Returns proper answer
        return index === -1 ? arr.length : index;
    }
    
    where([40, 60], 50);