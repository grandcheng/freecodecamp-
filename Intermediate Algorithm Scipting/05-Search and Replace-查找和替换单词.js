    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Search-And-Replace
    //ʹ�ø����Ĳ����Ծ���ִ��һ�β��Һ��滻��Ȼ�󷵻��¾��ӡ�
    //��һ�������ǽ�Ҫ����ִ�в��Һ��滻�ľ��ӡ�
    //�ڶ��������ǽ����滻���ĵ��ʣ��滻ǰ�ĵ��ʣ���
    //���������������滻�ڶ����������滻��ĵ��ʣ���
    //ע�⣺�滻ʱ����ԭ���ʵĴ�Сд�����磬��������õ��� "dog" �滻���� "Book" ����Ӧ���滻�� "Dog"��
    //�ҵķ���
    function myReplace(str, before, after) {
        if(before[0]>='A'&&before[0]<='Z')
        {
            after = after.split("");
            var first = String.fromCharCode(after[0].charCodeAt(0)-32);
            after.shift();
            after.unshift(first);
            after = after.join("");

        }
        str = str.replace(before,after);
        return str;
    }


    //�ٷ���basic����
    function myReplace(str, before, after) {
        // Find index where before is on string
        var index = str.indexOf(before);
        // Check to see if the first letter is uppercase or not
        if (str[index] === str[index].toUpperCase()) {
            // Change the after word to be capitalized before we use it.
            after = after.charAt(0).toUpperCase() + after.slice(1);
        }
        // Now replace the original str with the edited one.
        str = str.replace(before, after);

        return str;
    }


    //�ٷ���intermediate����
    function myReplace(str, before, after) {
    //Create a regular expression object
        var re = new RegExp(before,"gi");
    //Check whether the first letter is uppercase or not
        if(/[A-Z]/.test(before[0])){
            //Change the word to be capitalized
            after = after.charAt(0).toUpperCase()+after.slice(1);
        }
        //Replace the original word with new one
        var  newStr =  str.replace(re,after);

        return newStr;
    }


    //�ٷ���advanced����
    function myReplace(str, before, after) {

        // create a function that will change the casing of any number of letter in parameter "target"
        // matching parameter "source"
        function applyCasing(source, target) {
            // split the source and target strings to array of letters
            var targetArr = target.split("");
            var sourceArr = source.split("");
            // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
            for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
                // find out the casing of every letter from sourceArr using regular expression
                // if sourceArr[i] is upper case then convert targetArr[i] to upper case
                if (/[A-Z]/.test(sourceArr[i])) {
                    targetArr[i] = targetArr[i].toUpperCase();
                }
                // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
                else targetArr[i] = targetArr[i].toLowerCase();
            }
            // join modified targetArr to string and return
            return (targetArr.join(""));
        }
        // replace "before" with "after" with "before"-casing
        return str.replace(before, applyCasing(before, after));
    }
    
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");