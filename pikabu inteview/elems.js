// Не вполне понятно из описания - нужно получить все div с двумя классами как в примере, или div у которых в свойстве classList всего два свойства?
// На всякий случай написал оба.

// Если нужен div с двумя конкретными классами, то:

$('.class1.class2').doSomethnig

// А если нужны конкретно все div, в которых объявлено ровно два класса, не важно каких именно, то можно попробовать реализовать через функцию: 

func($('div[class]'));

function func(object){
  let elemStorage = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      if(element.classList){ 
        element.classList.length == 2 && elemStorage.push(element)
      }
    }
  }
            
  return elemStorage;
}