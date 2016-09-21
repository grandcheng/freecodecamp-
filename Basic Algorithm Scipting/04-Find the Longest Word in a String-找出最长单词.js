    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Find-The-Longest-Word-In-A-String
    //�ҵ��ṩ�ľ�������ĵ��ʣ����������ĳ��ȡ�
    function findLongestWord(str) {
        //�Լ��ķ���
        var max = 0;
        str = str.split(" ");
        for(var i=0;i<str.length;i++){
            if(str[i].length > max){
                max = str[i].length;
            }
        }
        return max;

        //�ٷ���basic����
        var words = str.split(' ');
        var maxLength = 0;

        for (var i = 0; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
            }
        }

        return maxLength;
    }


    //�ٷ���intermediate����
    function findLongestWord(s) {
        return s.split(' ')
            .reduce(function(x, y) {
                return Math.max(x, y.length)
            }, 0);
    }

    //�ٷ���advanced����
    function findLongestWord(str) {

        //split the string into individual words
        //(important!!, you'll see why later)
        str = str.split(" ");

        //str only has 1 element left that is the longest element,
        //return the length of that element
        if(str.length == 1){
            return str[0].length;
        }

        //if the first element's length is greater than the second element's (or equal)
        //remove the second element and recursively call the function)
        if(str[0].length >= str[1].length){
            str.splice(1,1);
            return findLongestWord(str.join(" "));
        }

        //if the second element's length is greater thant the first element's start
        //call the function past the first element
        if(str[0].length <= str[1].length){
            // from the first element to the last element inclusive.
            return findLongestWord(str.slice(1,str.length).join(" "));
        }
    }
    findLongestWord("The quick brown fox jumped over the lazy dog");