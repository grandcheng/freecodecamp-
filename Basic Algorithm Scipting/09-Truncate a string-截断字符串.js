    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Truncate-A-String
    //如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
    //切记，插入到字符串尾部的三个点号也会计入字符串的长度。
    //但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
    //我的方法
    function truncate(str, num) {

        // Clear out that junk in your trunk
        if(str.length>num&&num>3) {
            str = str.slice(0, num-3) + '...';
            return str;
        }
        if(str.length>num&&num<=3){
            str=str.slice(0,num)+'...';
        }

        return str;
    }

    //官方的basic方法
    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num && num > 3) {
            return str.slice(0, (num - 3)) + '...';
        } else if (str.length > num && num <= 3) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }

    }

    //官方的advanced方法
    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        } else {
            return str.slice(0, num > 3 ? num - 3 : num) + '...';
        }
    }


    truncate("A-tisket a-tasket A green and yellow basket", 11);