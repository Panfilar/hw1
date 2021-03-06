/* ДЗ 3 - объекты и массивы */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i=0;i<array.length;i++) {
        fn(array[i], array.indexOf(array[i]), array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var atr3=[];

    for (var i=0;i<array.length;i++) {
        atr3.push(fn(array[i], array.indexOf(array[i]), array));
        /* вместо array.indexOf(array[i]) логичнее было использовать i,
но мне почему то текущая запись показалость "смешной" в своей нелепости, решил оставить*/
    }

    return atr3;

}
/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var initCheck=initial ? initial: array[0];
    var i = initial ? 0 : 1;

    for (i; i < array.length; i++) {
        initCheck=fn(initCheck, array[i], i, array);
    }

    return initCheck;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    var res=obj.hasOwnProperty(prop)? 1:0;

    return res;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var propArray = [];

    for (var prop in obj) {
        propArray.push(prop);
    }

    return propArray;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var propArrayUpperCase = [];

    for (var prop in obj) {
        propArrayUpperCase.push(prop.toUpperCase());
    }

    return propArrayUpperCase;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from=0, to=array.length) {
    /* from=from||0; почему то не сработала такая запись */
    /* to=to||array.length; почему то не сработала такая запись */
    var result = [];

    if (from < -array.length) {
        from = 0;
    }
    if (from < 0) {
        from = from + array.length;
    }

    if (to < 0) {
        to = to + array.length;
    }
    if (to > array.length) {
        to = array.length;
    }

    for (from; from < to; from++) {
        result.push(array[from]);
    }

    return result;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
/* function createProxy(obj) {
} */

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    /* createProxy */
};
