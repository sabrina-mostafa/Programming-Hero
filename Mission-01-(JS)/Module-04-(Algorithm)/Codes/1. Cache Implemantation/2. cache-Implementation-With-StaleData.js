
STALE_TIME = 10000;   // 10 seconds
const dataCache = new Map();

// runs the expensive task
const expensiveTask = (id) => {
    console.log("Ran the Expensive Task for id:", id);

    return {
        id: id,
        data: `This is the data of id: ${id}`,
        timeStamp: new Date(),
    };
};

const fetchData = (id) => {
    const desiredData = expensiveTask(id);

    // inserting the data and insertion_time on the MAP
    dataCache.set(id, {
        dataValue: desiredData,
        cachedAt: Date.now(),
    });
    return desiredData;
}

// gets any data bu it's id
const getAnyData = (id) => {

    // If the data is already present in the Cache
    if (dataCache.has(id)) {

        const isSTale = Date.now() - dataCache.get(id).cachedAt > STALE_TIME;

        if (isSTale) {
            console.log(`STALE data for id: ${id}. Refetching....`);

            const freshData = fetchData(id);
            return freshData;
        }
        else {
            console.log(`Cache HIT for id: ${id}`);
            return dataCache.get(id).dataValue;
        }
    }
    // If the data is NOT present in the Cache
    else {
        console.log("Cache MISS for id: ", id);

        const desiredData = fetchData(id);
        return desiredData;
    }
};

console.log(getAnyData(222));
console.log(getAnyData(242));
setTimeout(() => console.log(getAnyData(222)), 5000);  // 5 seconds
setTimeout(() => console.log(getAnyData(222)), 11000);
