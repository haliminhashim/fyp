const driver = require('bigchaindb-driver')

const API_PATH = 'https://test.bigchaindb.com/api/v1/'

const conn = new driver.Connection(API_PATH)

const user = {
  "publicKey": "BPcvGEeG5u8U2RPNww2X5QhMnJRQ7vX2JqD7yY55PQyY",
  "privateKey": "6t9DK7eb2azS62skzG7WttK4LErBZNwobRMWmBTHUrVv"
}

const assetdata = {
  'participant': {
    'groupBuyId': 'group_buy_id_1',
    'email': 'halimin87@gmail.com',
    'quantity': '2',
    'invitedCode': 'invite_code_1_halimin87@gmail.com',
    'invitedBy': '',
    'paymentDetails': {
        'fullName': 'Muhammad Halimin Bin Mohammad Hashim',
        'billingAddress': '699 Hougang St 52 #13-05 Singapore 530699',
        'shippingAddress': '699 Hougang St 52 #13-05 Singapore 530699',
        'cardNo': '1234 5678 1234 5678',
        'cvc': '111',
    },
    'status': 'join'
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
    driver.Transaction.makeEd25519Condition(user.publicKey))],
    user.publicKey
)

const signedTransaction = driver.Transaction.signTransaction(baseTransaction, user.privateKey)

conn.postTransactionCommit(signedTransaction)
