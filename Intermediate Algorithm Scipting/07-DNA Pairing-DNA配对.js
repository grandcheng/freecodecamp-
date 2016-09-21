    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-DNA-Pairing
    //DNA ��ȱ����Եļ��������ÿһ�������Ϊ���ҵ���Եļ����Ȼ�󽫽����Ϊ�ڶ������鷵�ء�
    //Base pairs������ԣ� ��һ�� AT �� CG��Ϊ��������ĸƥ��ȱʧ�ļ����
    //��ÿһ�������н���������ĸ��Ϊ��һ��������ء�
    //���磬��������� GCG����Ӧ�ط��� [["G", "C"], ["C","G"],["G", "C"]]
    //��ĸ����֮��Ե���ĸ��һ�������ڣ�Ȼ�����������ٱ���֯������װ��һ�����顣
    //�ٷ���basic����
    function pairElement(str) {
        // Return each strand as an array of two elements, the original and the pair.
        var paired = [];

        // Function to check with strand to pair.
        var search = function(char) {
            switch (char) {
                case 'A':
                    paired.push(['A', 'T']);
                    break;
                case 'T':
                    paired.push(['T', 'A']);
                    break;
                case 'C':
                    paired.push(['C', 'G']);
                    break;
                case 'G':
                    paired.push(['G', 'C']);
                    break;
            }
        };

        // Loops through the input and pair.
        for (var i = 0; i < str.length; i++) {
            search(str[i]);
        }

        return paired;
    }

    //�ٷ���intermediate����
    function pairElement(str) {
        //define a map object with all pair possibilities
        var map = {T:'A', A:'T', G:'C', C:'G'};
        //split str into a char Array
        strArr = str.split('');
        //replace each Array item with a 2d Array using map
        for (var i=0;i<strArr.length;i++){
            strArr[i]=[strArr[i], map[strArr[i]]];
        }
        return strArr;
    }

    pairElement("GCG");