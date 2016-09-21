    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Binary-Agents
    //传入二进制字符串，翻译成英语句子并返回。
    //二进制字符串是以空格分隔的。
    //我的方法
    function binaryAgent(str) {
        var num = (str.length+1)/9;
        var result = "";
        str = str.split(" ");
        for(var i=0;i<num;i++){
            var temp = 0;
            for(var j=7;j>=0;j--){
                temp += (Math.pow(2,j)*str[i][7-j]);
                //console.log((Math.pow(2,j)*str[i][7-j]));
            }
            result += String.fromCharCode(temp);
            //console.log(result);
        }
        return result;
    }

    //官方的basic方法
    function binaryAgent(str) {
        biString = str.split(' ');
        uniString = [];

        /*using the radix (or base) parameter in parseInt, we can convert the binary
         number to a decimal number while simultaneously converting to a char*/

        for(i=0;i < biString.length;i++){
            uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
        }
//we then simply join the string
        return uniString.join('');
    }


    //官方的intermediate方法
    function binaryAgent(str) {
        // Separate the binary code by space.
        str = str.split(' ');
        var power;
        var decValue = 0;
        var sentence = '';

        // Check each binary number from the array.
        for (var s = 0; s < str.length; s++) {
            // Check each bit from binary number
            for (var t = 0; t < str[s].length; t++) {
                // This only takes into consideration the active ones.
                if (str[s][t] == 1) {
                    // This is quivalent to 2 ** position
                    power = Math.pow(2, +str[s].length - t - 1);
                    decValue += power;

                    // Record the decimal value by adding the number to the previous one.
                }
            }

            // After the binary number is converted to decimal, convert it to string and store
            sentence += (String.fromCharCode(decValue));

            // Reset decimal value for next binary number.
            decValue = 0;
        }

        return sentence;
    }

    //官方的advanced方法
    function binaryAgent(str) {
        return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }
    
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");