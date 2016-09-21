    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Search-And-Replace
    //使用给定的参数对句子执行一次查找和替换，然后返回新句子。
    //第一个参数是将要对其执行查找和替换的句子。
    //第二个参数是将被替换掉的单词（替换前的单词）。
    //第三个参数用于替换第二个参数（替换后的单词）。
    //注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
    //我的方法
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


    //官方的basic方法
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


    //官方的intermediate方法
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


    //官方的advanced方法
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