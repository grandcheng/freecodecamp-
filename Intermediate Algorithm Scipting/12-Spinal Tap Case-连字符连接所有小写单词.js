    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Spinal-Tap-Case
    //将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
    //官方的basic方法
    function spinalCase(str) {
        // Create a variable for the white space and underscores.
        var regex = /\s+|_+/g;

        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

        // Replace space and underscore with -
        return str.replace(regex, '-').toLowerCase();
    }

    //官方的intermediate方法
    function spinalCase(str) {
        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
        // Split on whitespace and underscores and join with dash
        return str.toLowerCase().split(/(?:_| )+/) .join('-');
    }

    
    spinalCase('This Is Spinal Tap');