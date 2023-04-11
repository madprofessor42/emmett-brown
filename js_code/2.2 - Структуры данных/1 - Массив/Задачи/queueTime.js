const queueTime = (customers, n) => {
    // creates an array of length n representing the tills
    // Each till is given a value of 0 to represent initial waitTime before the queue begins.
    const tills = new Array(n).fill(0);
    // goes through the queue of customer waitTimes
    for (let waitTime of customers) {
        // finds the till with the least wait time on it, adds the next customer's time to it
        const lowestWaitTill = tills.indexOf(Math.min(...tills));
        tills[lowestWaitTill] += waitTime;
        console.log(tills)
    }
    // end result is that the waitTimes (load) on the tills are distributed optimally.
    // The waitTime of the till with the heaviest load represents the total time taken
    return Math.max(...tills);
}

console.log(queueTime([2,15,4, 7], 2))

