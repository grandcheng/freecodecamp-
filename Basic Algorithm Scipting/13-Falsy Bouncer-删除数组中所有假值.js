    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Falsy-Bouncer
    //删除数组中的所有假值。
    //在JavaScript中，假值有false、null、0、""、undefined 和 NaN。

    //我的方法
    function bouncer(arr) {
        // Don't show a false ID to this bouncer.
        var result = arr.filter(function(value){
            if(value){
                return true;
            }
            if (value === false || value === null || value === 0 || value === "" || value === undefined || isNaN(value)) {
                return false;
            }else{
                return true;
            }
        });
        return result;
    }

    //官方方法
    function bouncer(arr) {
        return arr.filter(Boolean);
    }

    bouncer([7, "ate", "", false, 9]);