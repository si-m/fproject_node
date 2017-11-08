const PROTO_PATH = __dirname + '/api.proto'

import grpc     from 'grpc'
import config   from 'config'

const proto_stub = grpc.load(PROTO_PATH)

exports.predict = (data) => {
  return new Promise((resolve, reject) => {
    const client = new proto_stub.Api(config.PREDICTION_API, grpc.credentials.createInsecure())

    client.predict({tweets: data}, (err, response) => {
      if(err)
       reject(err)

      resolve(response)
    })
  })
}

