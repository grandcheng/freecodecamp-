
    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Check-For-Palindromes
    //����������ַ����ǻ��ģ�����true����֮������false��
    //���һ���ַ������Ա����š���Сд�Ϳո����Ŷ��ͷ��Ŷ�һģһ������ô����ַ�������palindrome(����)��
    function palindrome(str) {
        //�Լ��ķ���
        // Good luck!
        str=str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
        var str2=str.split("").reverse().join("");
        if(str==str2) {
            return true;
        }
        else{
            return false;
        }

        //�ٷ���basic����
        return str.replace(/[\W_]/g, '').toLowerCase() ===
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }


    //�ٷ���intermediate����
    function palindrome(str) {
        str = str.toLowerCase().replace(/[\W_]/g, '');
        for(var i = 0, len = str.length - 1; i < len/2; i++) {
            if(str[i] !== str[len-i]) {
                return false;
            }
        }
        return true;
    }

    //�ٷ���advanced����
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