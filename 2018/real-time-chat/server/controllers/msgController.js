const msgController = {}

msgController.users = [
  'Cimadev'
]

msgController.msgDb = [
  {
    userName: 'Cimadev',
    msg: 'Hello welcome to cimachat web app :)'
  }
]

msgController.post = (req, res) => {
  const {
    userName,
    msg
  } = req.body
  const newMsg = {
    userName,
    msg
  }
  msgDb.push(newMsg)
  console.log(msgDb)
}

msgController.getAll = (req, res) => {
  res.status(200).json({
    success:true,
    data:msgDb
  })
}
module.exports = msgController
