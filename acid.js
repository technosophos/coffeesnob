events.push = function(e) {
  var test = new Job("nodejs-test")

  test.image = "node:latest"
  test.tasks = [
    "npm install",
    "npm test"
  ]

  test.run()
}
