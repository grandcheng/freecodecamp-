    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Missing-Letters
    //�Ӵ��ݽ�������ĸ�������ҵ�ȱʧ����ĸ����������
    //���������ĸ���������У����� undefined��
    //�ҵķ���
    function fearNotLetter(str) {
        str = str.split("");
        for(var i=0;i<str.length-1;i++){
            if(str[i+1].charCodeAt(0)-str[i].charCodeAt(0)!=1){
                return String.fromCharCode(str[i].charCodeAt(0)+1);
            }
        }
        return undefined;
    }


    //�ٷ���basic����
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

    //�ٷ���intermediate����
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

    //�ٷ���advanced����
    function fearNotLetter(str) {
        var allChars = '';
        var notChars = new RegExp('[^'+str+']','g');

        for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
            allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

        return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }
    
    fearNotLetter("abce");