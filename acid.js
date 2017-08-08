events.push = function(e) {
  var test = new Job("nodejs-test")

  test.image = "node:latest"
  test.tasks = [
    "cd src/",
    "npm install",
    "npm test"
  ]

  test.run()

  // Send a notification on Slack.
  var slack = new Job("slack-notify")

  slack.image = "technosophos/slack-notify:latest"
  slack.env = {
    SLACK_WEBHOOK: project.secrets.SLACK_WEBHOOK,
    SLACK_USERNAME: "AcidBot",
    SLACK_MESSAGE: "Build complete"
  }
  slack.tasks = ["/slack-notify"]

  slack.run()
}
