const driver = require('bigchaindb-driver')

const API_PATH = 'https://test.bigchaindb.com/api/v1/'

const conn = new driver.Connection(API_PATH)

conn.searchAssets('group_buy_id_2')
  .then(assets => {
    console.log('-----Assets-----')
    console.log(assets)
  })