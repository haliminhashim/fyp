const driver = require('bigchaindb-driver')

const API_PATH = 'https://test.bigchaindb.com/api/v1/'

const conn = new driver.Connection(API_PATH)

conn.getTransaction('0ad9c8b6e59cf04cddc60a9e99cdef5a1b56b1cb68dbb2d87b438785ab58ea1d').then(data => {
  console.log('-----Transaction-----')
  console.log(data);
})