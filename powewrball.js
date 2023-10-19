const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
let nums = [];
let powerball = (Math.floor(Math.random() * 29) + 1)

//Set the response HTTP header with HTTP status and Content type
res.statusCode = 200;
res.setHeader("Content-Type", "text/html");
for (let i = 0; i <= 5; i ++){
    nums[i] = (Math.floor(Math.random() * 69) + 1).toString();
}

res.end(`<h1>Numbers Are: ${(nums[0])}, ${(nums[1])}, ${(nums[2])}, ${(nums[3])}, ${(nums[4])}, ${(nums[5])}  Powerball: ${(powerball)}</h1>`);

});
//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
})