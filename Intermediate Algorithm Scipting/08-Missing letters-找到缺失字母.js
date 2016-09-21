    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Missing-Letters
    //从传递进来的字母序列中找到缺失的字母并返回它。
    //如果所有字母都在序列中，返回 undefined。
    //我的方法
    function fearNotLetter(str) {
        str = str.split("");
        for(var i=0;i<str.length-1;i++){
            if(str[i+1].charCodeAt(0)-str[i].charCodeAt(0)!=1){
                return String.fromCharCode(str[i].charCodeAt(0)+1);
            }
        }
        return undefined;
    }


    //官方的basic方法
    function fearNotLetter(str) {

        for(var i = 0; i < str.length; i++) {
            /* code of current character */
            var code = str.charCodeAt(i);

            /* if code of current character is not equal to first character + no of iteration
             hence character has been escaped */
            if (code !== str.charCodeAt(0) + i) {

                /* if current character has escaped one character find previous char and return */
                return String.fromCharCode(code - 1);
            }
        }
        return undefined;
    }

    //官方的intermediate方法
    // Adding this solution for the sake of avoiding using 'for' and 'while' loops.
    // See the explanation for reference as to why. It's worth the effort.
    function fearNotLetter(str) {
        var compare = str.charCodeAt(0), missing;

        str.split('').map(function(letter,index) {
            if (str.charCodeAt(index) == compare) {
                ++compare;
            } else {
                missing = String.fromCharCode(compare);
            }
        });

        return missing;
    }

    //官方的advanced方法
    function fearNotLetter(str) {
        var allChars = '';
        var notChars = new RegExp('[^'+str+']','g');

        for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
            allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

        return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }
    
    fearNotLetter("abce");