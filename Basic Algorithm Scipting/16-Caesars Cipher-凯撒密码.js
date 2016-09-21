    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Caesars-Cipher
    //�������������ܷ���ȫ��Ŀ�������Caesar cipher���ֽ���λ���롣
    //��λ����Ҳ���������е���ĸ�ᰴ��ָ��������������λ��
    //һ�������İ�������ROT13���룬��ĸ����λ13��λ�á���'A' ? 'N', 'B' ? 'O'���Դ����ơ�
    //дһ��ROT13������ʵ����������ַ�������������ַ�����
    //���е���ĸ���Ǵ�д����Ҫת���κη���ĸ��ʽ���ַ�(���磺�ո񣬱�����)��������Щ�����ַ����������ǡ�
    //�ҵķ���
    function rot13(str) { // LBH QVQ VG!
        var result = new String();
        var begin = 'A'.charCodeAt(0);
        var end = 'Z'.charCodeAt(0);
        for(var i=0;i<str.length;i++){
            if(str[i]>='A'&&str[i]<='Z') {
                if(str.charCodeAt(i)+13<=end) {
                    result += String.fromCharCode(str.charCodeAt(i) + 13);
                }else{
                    result += String.fromCharCode(begin + str.charCodeAt(i)+12-end);
                }
            }else{
                result +=str[i];
            }
        }
        return result;
    }

    //�ٷ���basic����
    function rot13(str) {
        // Split str into a character array
        return str.split('')
            // Iterate over each character in the array
            .map.call(str, function(char) {
                // Convert char to a character code
                x = char.charCodeAt(0);
                // Checks if character lies between A-Z
                if (x < 65 || x > 90) {
                    return String.fromCharCode(x);  // Return un-converted character
                }
                //N = ASCII 78, if the character code is less than 78, shift forward 13 places
                else if (x < 78) {
                    return String.fromCharCode(x + 13);
                }
                // Otherwise shift the character 13 places backward
                return String.fromCharCode(x - 13);
            }).join('');  // Rejoin the array into a string
    }

    //�ٷ���intermediate����
    // Solution with Regular expression and Array of ASCII character codes
    function rot13(str) {
        var rotCharArray = [];
        var regEx = /[A-Z]/ ;
        str = str.split("");
        for (var x in str) {
            if (regEx.test(str[x])) {
                // A more general approach
                // possible because of modular arithmetic
                // and cyclic nature of rot13 transform
                rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
            } else {
                rotCharArray.push(str[x].charCodeAt());
            }
        }
        str = String.fromCharCode.apply(String, rotCharArray);
        return str;
    }

    //�ٷ���advanced����
    function rot13(str) { // LBH QVQ VG!
        return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26));
    }
    rot13("SERR PBQR PNZC");