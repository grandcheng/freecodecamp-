    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Confirm-The-Ending
    //检查一个字符串(str)是否以指定的字符串(target)结尾。
    //自己的方法
    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
        var length1 = str.length;
        var length2 = target.length;
        str = str.substr(length1-length2,length2);
        if(str==target){
            return true;
        }
        else{
            return false;
        }
    }

    //官方的方法
    function confirmEnding(str, target) {
        return str.substr(-target.length) === target;
    }

    confirmEnding("Bastian", "n");