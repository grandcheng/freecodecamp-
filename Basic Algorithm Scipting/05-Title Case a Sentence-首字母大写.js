    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Title-Case-A-Sentence
    //确保字符串的每个单词首字母都大写，其余部分小写。

    //自己的方法
    function titleCase(str) {
        str = str.toLowerCase();
        str = str.split(" ");
        for(var i=0;i<str.length;i++){
            str[i] = str[i].substring(0,1).toUpperCase() + str[i].substring(1);
        }
        str = str.join(" ");
        return str;
    }

    //官方的basic方法
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

    //官方的Intermediate方法
    function titleCase(str) {
        var convertToArray = str.toLowerCase().split(" ");
        var result = convertToArray.map(function(val){
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        return result.join(" ");
    }

    //官方的advanced方法
    function titleCase(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }
    titleCase("I'm a little tea pot");