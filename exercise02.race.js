function race(input) {
    let participants = input.shift().split(", ");
    let racers = {};

    for (let name of participants) {
        racers[name] = 0;
    }

    let namePattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    let line = input.shift();

    while (line !== "end of race") {
        
        let letters = line.match(namePattern);
        let name = letters ? letters.join("") : "";

        let digits = line.match(digitPattern);
        let distance = digits ? digits.map(Number).reduce((a, b) => a + b, 0) : 0;

        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }

        line = input.shift();
    }

    let sorted = Object.entries(racers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race']);