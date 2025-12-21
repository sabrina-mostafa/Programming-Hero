// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.


const dataCache = new Map();

const expensiveTask = (id) => {
    console.log("Ran the expensive task for id:", id);

    return {
        id: id,
        data: `This is the data of id: ${id}`,
        timeStamp: new Date()
    }
}

const getAnyData = (id) => {
    if(dataCache.has(id)) {
        console.log(`Cache HIT for the id: ${id}`);

        return dataCache.get(id);
    }
    else {
        console.log(`Cache MISS for the id: ${id}`);

        const desiredData = expensiveTask(id);
        dataCache.set(id, desiredData);
        return desiredData;
    }
}

console.log(dataCache);
console.log(getAnyData(222));
console.log(getAnyData(242));
console.log(getAnyData(222));
console.log(dataCache);
