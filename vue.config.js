module.exports = {
  devServer: {
    before(app) {
      app.get('/api/getItems', (req, res) => {
        res.json(['🍎', '🍌', '🧆'])
      })
    },
  },
}
