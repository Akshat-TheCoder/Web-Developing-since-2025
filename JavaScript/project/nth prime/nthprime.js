console.log("Program started 🚀");

// async provider of n
function getNAsync() {
    console.log("Waiting for n...");
    return new Promise(resolve => {
        let value = 11;
        setTimeout(() => {
            resolve(`${value}`); // try n = 10
            console.log("n received ✅");
        }, 1000);
        if(value >10){
            console.log(`It will take some time`);
        }else if(value >12){
            console.log(`It will Take TOO MUCH TIME to result`);
        }
    });
}

// Wilson-based prime indicator (BigInt-safe)
function primeIndicator(j) {
    if (j < 2) return 0;

    const mod = BigInt(j);
    let prod = 1n;

    for (let k = 2n; k < mod; k++) {
        prod = (prod * k) % mod;
        if (prod === 0n) return 0; // composite
    }

    return ((prod + 1n) % mod === 0n) ? 1 : 0;
}

// main async nth-prime computation
async function nthPrimeAsync() {
    const n = await getNAsync();
    console.log(`Computing the ${n}th prime`);

    let total = 0; // ✅ FIX: start from 0
    const limit = 2 ** n;
    let lastPercent = -1;

    for (let i = 1; i <= limit; i++) {
        let innerSum = 0;

        for (let j = 1; j <= i; j++) {
            innerSum += primeIndicator(j);
        }

        if (innerSum === 0) continue;

        const term = Math.floor(
            Math.pow(n / innerSum, 1 / n)
        );

        total += term;

        // progress logging (throttled)
        const percent = Math.floor((i / limit) * 100);
        if (percent !== lastPercent) {
            console.log(`Progress: ${percent}%`);
            lastPercent = percent;
        }

        await Promise.resolve(); // yield control
    }

    return total;
}

// runner
(async function run() {
    console.log("Run started ▶️");

    const prime = await nthPrimeAsync();

    console.log("Result (n-th prime) =", prime);
    console.log("Run finished 🏁");
})();
