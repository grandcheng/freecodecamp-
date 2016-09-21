    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Spinal-Tap-Case
    //���ַ���ת��Ϊ spinal case��Spinal case �� all-lowercase-words-joined-by-dashes ������ʽ�ģ�Ҳ���������ַ���������Сд���ʡ�
    //�ٷ���basic����
    function spinalCase(str) {
        // Create a variable for the white space and underscores.
        var regex = /\s+|_+/g;

        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

        // Replace space and underscore with -
        return str.replace(regex, '-').toLowerCase();
    }

    //�ٷ���intermediate����
    function spinalCase(str) {
        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
        // Split on whitespace and underscores and join with dash
        return str.toLowerCase().split(/(?:_| )+/) .join('-');
    }

    
    spinalCase('This Is Spinal Tap');