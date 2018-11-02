

var message = (message) => {
    console.log("====================")
    console.log("loops" + message)
    console.log("====================")
}
message("operator prcendence")

let result = 1 + 2 * 3;
console.log(result);
result = (1 + 2) * 3;
console.log(result);

for (let i = 0; i < 7; i++) {
    console.log(i)

}

for (let i = 0; i <= 25; i++) {
    console.log(i)
}

var looper = 10;
while (looper < 15) {
    console.log(looper++)
}

do {
    console.log(looper++);
} while (looper < 15);


