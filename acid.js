events.push = function(e) {
  var test = new Job("nodejs-test")

  test.image = "node:latest"
  test.tasks = [
    "cd src/",
    "npm install",
    "npm test"
  ]

  test.run()
}
