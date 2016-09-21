    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Convert-HTML-Entities
    //将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
    //官方的basic方法
    function convertHTML(str) {
        // Split by character to avoid problems.

        var temp = str.split('');

        // Since we are only checking for a few HTML elements I used a switch

        for (var i = 0; i < temp.length; i++) {
            switch (temp[i]) {
                case '<':
                    temp[i] = '&lt;';
                    break;
                case '&':
                    temp[i] = '&amp;';
                    break;
                case '>':
                    temp[i] = '&gt;';
                    break;
                case '"':
                    temp[i] = '&quot;';
                    break;
                case "'":
                    temp[i] = "&apos;";
                    break;
            }
        }

        temp = temp.join('');
        return temp;
    }



    //官方的intermediate方法
    function convertHTML(str) {
    //Chaining of replace method with different arguments
        str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
        return str;
    }


    //官方的advanced方法
    function convertHTML(str) {
        // Use Object Lookup to declare as many HTML entities as needed.
        htmlEntities={
            '&':'&amp;',
            '<':'&lt;',
            '>':'&gt;',
            '\"':'&quot;',
            '\'':"&apos;"
        };
        //Use map function to return a filtered str with all entities changed automatically.
        return str.split('').map(function(entity){
            return htmlEntities[entity] || entity;
        }).join('');
    }
    
    convertHTML("Dolce & Gabbana");