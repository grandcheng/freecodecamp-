    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Title-Case-A-Sentence
    //ȷ���ַ�����ÿ����������ĸ����д�����ಿ��Сд��

    //�Լ��ķ���
    function titleCase(str) {
        str = str.toLowerCase();
        str = str.split(" ");
        for(var i=0;i<str.length;i++){
            str[i] = str[i].substring(0,1).toUpperCase() + str[i].substring(1);
        }
        str = str.join(" ");
        return str;
    }

    //�ٷ���basic����
    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    };
    function titleCase(str) {
        var newTitle = str.split(' ');
        var updatedTitle = [];
        for (var st in newTitle) {
            updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
        }
        return updatedTitle.join(' ');
    }

    //�ٷ���Intermediate����
    function titleCase(str) {
        var convertToArray = str.toLowerCase().split(" ");
        var result = convertToArray.map(function(val){
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        return result.join(" ");
    }

    //�ٷ���advanced����
    function titleCase(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }
    titleCase("I'm a little tea pot");