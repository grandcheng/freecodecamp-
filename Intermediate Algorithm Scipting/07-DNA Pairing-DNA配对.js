    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-DNA-Pairing
    //DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
    //Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
    //在每一个数组中将给定的字母作为第一个碱基返回。
    //例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
    //字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
    //官方的basic方法
    function pairElement(str) {
        // Return each strand as an array of two elements, the original and the pair.
        var paired = [];

        // Function to check with strand to pair.
        var search = function(char) {
            switch (char) {
                case 'A':
                    paired.push(['A', 'T']);
                    break;
                case 'T':
                    paired.push(['T', 'A']);
                    break;
                case 'C':
                    paired.push(['C', 'G']);
                    break;
                case 'G':
                    paired.push(['G', 'C']);
                    break;
            }
        };

        // Loops through the input and pair.
        for (var i = 0; i < str.length; i++) {
            search(str[i]);
        }

        return paired;
    }

    //官方的intermediate方法
    function pairElement(str) {
        //define a map object with all pair possibilities
        var map = {T:'A', A:'T', G:'C', C:'G'};
        //split str into a char Array
        strArr = str.split('');
        //replace each Array item with a 2d Array using map
        for (var i=0;i<strArr.length;i++){
            strArr[i]=[strArr[i], map[strArr[i]]];
        }
        return strArr;
    }

    pairElement("GCG");