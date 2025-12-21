
// --------------- We might use this kind of Functions in Pagination ------------------
const rangeArray = (start, stop, step) => {
    const arr = Array.from( {length: Math.ceil((stop-start)/step)}, (value, idx) => start+idx*step ) ;

    return arr;
}

console.log(rangeArray(1, 15, 2));