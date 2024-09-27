const promise1 = Promise.reject('Error 1');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Success'));
const promise3 = Promise.reject('Error 3');

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);  // Logs: "Success" because it was the first to fulfill
    })
    .catch((error) => {
        console.error(error);  // Logs an AggregateError if all promises reject
    });
