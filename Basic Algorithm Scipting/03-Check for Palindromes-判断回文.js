
    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Check-For-Palindromes
    //如果给定的字符串是回文，返回true，反之，返回false。
    //如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
    function palindrome(str) {
        //自己的方法
        // Good luck!
        str=str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
        var str2=str.split("").reverse().join("");
        if(str==str2) {
            return true;
        }
        else{
            return false;
        }

        //官方的basic方法
        return str.replace(/[\W_]/g, '').toLowerCase() ===
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }


    //官方的intermediate方法
    function palindrome(str) {
        str = str.toLowerCase().replace(/[\W_]/g, '');
        for(var i = 0, len = str.length - 1; i < len/2; i++) {
            if(str[i] !== str[len-i]) {
                return false;
            }
        }
        return true;
    }

    //官方的advanced方法
    function palindrome(str) {
    // make all letters lowercase and remove non-alphanumeric characters
        str = str.toLowerCase().replace(/[^a-z|0-9]/g, "");

        // if the length of the string is 0 then it is a palindrome
        if (str.length === 0){
            return true;
        }
        // if the first letter and the last letter of the string
        // do not equal each other, then it is not a palindrome
        if (str[0] !== str[str.length-1]){
            return false;
        }
        //Else, run the function without the first and last characters.
        else{
            return palindrome(str.slice(1,str.length - 1));
        }
    }

    palindrome("eye");