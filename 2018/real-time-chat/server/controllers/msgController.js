const msgController = {}

msgController.post = (req, res) => {
  const {
    userName,
    msg
  } = req.body
  const newMsg = {
    userName,
    msg
  }
  console.log(newMsg)
}

msgController.getAll = (req, res) => {
  res.status(200).json({
    success: true
  })
}

module.exports = msgController
