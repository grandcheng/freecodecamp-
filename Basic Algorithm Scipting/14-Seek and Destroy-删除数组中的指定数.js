    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Seek-And-Destroy
    //实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
    //我的方法
    function destroyer(arr) {
        // Remove all the values
        var args = [];
        for(var i = 1; i < arguments.length; i++){
            args.push(arguments[i]);
        }
        var result = arr.filter(function(e){
            return args.indexOf(e) < 0;
        });
        return result;
    }


    //官方的方法
    function destroyer(arr) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        return arr.filter(function(element) {
            return args.indexOf(element) === -1;
        });
    }

    destroyer([1, 2, 3, 1, 2, 3], 2, 3);