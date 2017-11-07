const PROTO_PATH = __dirname + '/api.proto'

import grpc from 'grpc'

const proto_stub = grpc.load(PROTO_PATH)

exports.predict = (data) => {
  return new Promise((resolve, reject) => {
    const client = new proto_stub.Api('172.17.0.2:50051', grpc.credentials.createInsecure())

    client.predict({tweets: data}, (err, response) => {
      if(err)
       reject(err)

      resolve(response)
    })
  })
}

