const { events, Job } = require("brigadier");

events.on("pull_request"), (e, p) => {
  console.log(JSON.parse(e.payload))
});
