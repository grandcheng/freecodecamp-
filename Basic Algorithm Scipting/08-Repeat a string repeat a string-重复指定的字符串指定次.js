    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Repeat-A-String-Repeat-A-String
    //重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
    //自己的方法
    function repeat(str, num) {
        // repeat after me
        if(num<0){
            return "";
        }
        var nstr = str;
        for(var i=0;i<num-1;i++){
            nstr =  nstr.concat(str);
        }
        return nstr;
    }

    //官方的basic方法
    function repeatStringNumTimes(str, num) {
        var accumulatedStr = '';

        while (num > 0) {
            accumulatedStr += str;
            num--;
        }

        return accumulatedStr;
    }

    //官方的intermediate方法
    function repeatStringNumTimes(str, num) {
        if(num < 0)
            return "";
        if(num === 1)
            return str;
        else
            return str + repeatStringNumTimes(str, num - 1);
    }

    //官方的advanced方法
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str.repeat(num) : '';
    }


    repeat("abc", 3);