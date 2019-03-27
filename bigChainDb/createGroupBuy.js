const driver = require('bigchaindb-driver')

const API_PATH = 'https://test.bigchaindb.com/api/v1/'

const conn = new driver.Connection(API_PATH)

const admin = {
  "publicKey": "2qp4QFkyuRRFo8bseGFby1fEew81ztpigLWFdGswq2cK",
  "privateKey": "8wbua1RpsFiwyzdHYRsHVRPVqA5AWs9cambZJt5Zuhqc"
}

const assetdata = {
  'groupBuy': {
    'id': 'group_buy_id_2',
    'productId': 'trollee_product_id_1',
    'quantity': '100',
    'expire': '22022019',
    'price': '100',
    'tiers': [{
      'id': '1',
      'amount': '5',
      'discount': '5'
    }, {
      'id': '2',
      'amount': '10',
      'discount': '8'
    }, {
      'id': '3',
      'amount': '15',
      'discount': '15'
    }]
  }
}

const metadata = {
  'planet': 'earth'
}

const baseTransaction = driver.Transaction.makeCreateTransaction(
  assetdata,
  metadata,

  // A transaction needs an output
  [driver.Transaction.makeOutput(
    driver.Transaction.makeEd25519Condition(admin.publicKey))],
  admin.publicKey
)

const signedTransaction = driver.Transaction.signTransaction(baseTransaction, admin.privateKey)

conn.postTransactionCommit(signedTransaction)
