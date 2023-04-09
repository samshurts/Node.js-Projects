const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const emitter = new EventEmitter();

setImmediate(() => {
    emitter.emit("TEST_EVENT");
});

emitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired");
})
emitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired");
})
emitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired");
})