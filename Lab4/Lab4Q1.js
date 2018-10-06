const { Subject } = require("rxjs");
const { fork } = require("child_process");
const http = require("http");

const subject = new Subject();

function processRequest(reqres) {
  reqres.res.writeHead(200, { "Content-Type": "text/plain" });
  const childProcess = fork("TextFile.js");
  childProcess.send(reqres.req.url);
  childProcess.on("message", msg => {
    console.log("child Processed");
    reqres.res.write(msg);
  });
  childProcess.on("exit", () => {
    console.log("Child Process exit");
    reqres.res.end();
  });
}

subject.subscribe(processRequest);

http
  .createServer((req, res) => {
    subject.next({ req, res });
  })
  .listen(4000, "127.0.0.1");

console.log("Done...");