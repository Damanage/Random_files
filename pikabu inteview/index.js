// 16. Используя регулярные выражения (RegExp)
//  проверьте на валидность введенный пользователем URL (пусть это будет переменная url) по следующим критериям:

// разрешенные протоколы: http, https, а также ftp;
// URL может иметь один из следующих поддоменов (3го уровня) m, , c1...c100;
// домен второго уровня строго задан "pikabu";
// URL может иметь порт 8080;
// URL не может иметь путь, параметры и якорь.

// Пример URL валидный по заданным критериям: https://c52.pikabu.lh:8080

let str = 'https://m.pikabu.ru';

console.log(validator(str))
function validator (str){

    if (!subvalidator1(str)) {
       return subvalidator2(str)
    };
    return true

    function subvalidator1(str){
        let pattern =  /([a-z]+):\/\/(.+).pikabu.(.+)/,
            arr = str.match(pattern);
        if(arr === null){
            return false
        }
        else if(arr[0] === arr.input){ 
            if(arr[1] === 'https' || arr[1] === 'http' || arr[1] === 'ftp'){
                if(arr[2] === 'm' || arr[2] === 'm-test' || arr[2] === arr[2].match(/c[1-9]{1,2}/g)[0] || arr[2] === 'c100'){
                    if(arr[3] === 'lh:8080' || arr[3] === 'ru'){
                        return true
                    }
                }
            }   
        }
        return false
    };

    function subvalidator2(str){
        let pattern =  /[a-z]+:\/\/pikabu.(.+)/,
            arr = str.match(pattern);
            if(arr === null){
                return false
            }
            else if(arr[0] === arr.input){
                if(arr[1] === 'lh:8080' || arr[1] === 'ru'){
                    return true
            }
        }
        return false
    };

};


