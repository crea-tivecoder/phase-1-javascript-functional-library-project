//myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

//myMap
function myMap(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else {
        for (let key in collection) {
            newArray.push(callback(collection[key]));
        }
    }
    return newArray;
}

//myReduce
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
        acc = collection[0];
        startIdx = 1;
    }
    if (Array.isArray(collection)) {
        for (let i = startIdx; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        for (let key in collection) {
            acc = callback(acc, collection[key], collection);
        }
    }
    return acc;
}

//myFind
function myFind(collection, callback) {
    let foundItem;
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                foundItem = collection[i];
                break;
            }
        }
    } else {
        for (let key in collection) {
            if (callback(collection[key])) {
                foundItem = collection[key];
                break;
            }
        }
    }
    return foundItem;
}

//myFilter
function myFilter(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                newArray.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (callback(collection[key])) {
                newArray.push(collection[key]);
            }
        }
    }
    return newArray;
}

//mySize
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}
