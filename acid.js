events.push = function(e) {
  var test = new Job("nodejs-test")
  var slack = new Job("slack-notify")

  test.image = "node:latest"
  test.tasks = [
    "cd src/",
    "npm install",
    "npm test"
  ]

  slack.image = "technosophos/slack-notify:latest"
  slack.env = {
    SLACK_WEBHOOK: project.secrets.SLACK_WEBHOOK,
    SLACK_USERNAME: "AcidBot",
    SLACK_MESSAGE: "Build complete <@technosophos>"
  }
  slack.tasks = ["/slack-notify"]

  test.run()
  slack.run()
}
