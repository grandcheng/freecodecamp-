    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Pig-Latin
    //��ָ�����ַ�������� pig latin��
    //Pig Latin ��һ��Ӣ�ĵ��ʵĵ�һ�����������ԣ�consonant cluster���Ƶ���β��Ȼ����Ϻ�׺ "ay"��
    //���������Ԫ����ʼ����ֻ��Ҫ�ڴ�β��� "way" �Ϳ����ˡ�
    //�ҵķ���
    function translate(str) {
        var yuan = ['a','o','e','i','u'];
        if(yuan.indexOf(str[0])!=-1){
            str +='way';
        }else{
            str = str.split("");
            var temp = [];
            for(var i=0;i<str.length;i++){
                if(yuan.indexOf(str[i])==-1){
                    temp.push(str[i]);
                }else{
                    break;
                }
            }
            for(var i=0;i<temp.length;i++){
                str.shift();
            }
            temp = temp.join("");
            str.push(temp);
            str = str.join("");
            str+='ay';
        }
        return str;
    }


    //�ٷ���basic����
    function translatePigLatin(str) {
        // Create variables to be used
        var pigLatin = '';
        var regex = /[aeiou]/gi;

        // Check if the first character is a vowel
        if (str[0].match(regex)) {
            pigLatin = str + 'way';

        } else {

            // Find how many consonants before the first vowel.
            var vowelIndice = str.indexOf(str.match(regex)[0]);

            // Take the string from the first vowel to the last char
            // then add the consonants that were previously omitted and add the ending.
            pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
        }

        return pigLatin;
    }

    //�ٷ���intermediate����
    function translatePigLatin(str) {
        function check(obj) {
            return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
        }

        return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
    }

    //�ٷ���advanced����
    function translatePigLatin(str) {
        var strArr = [];
        var tmpChar;

        // check if the char is consonant using RegEx
        function isConsonant(char) {
            return !/[aeiou]/.test(char);
        }

        // return initial str + "way" if it starts with vowel
        // if not - convert str to array
        if (!isConsonant(str.charAt(0)))
            return str + "way";
        else
            strArr = str.split("");

        // push all consonats to the end of the array
        while (isConsonant(strArr[0])) {
            tmpChar = strArr.shift();
            strArr.push(tmpChar);
        }
        // convert array to string and concatenate "ay" at the end  
        return strArr.join("")+"ay";
    }
    
    translate("consonant");