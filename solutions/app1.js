const converterPromise = (arr) => new Promise((resolve, reject) => {
    if (arr.every((item) => typeof item === 'string')) {
        resolve(arr.map((item) => item.toLocaleUpperCase()));
    } else {
        reject('Error: Not all elements are string type!');
    }
});



export default converterPromise;
