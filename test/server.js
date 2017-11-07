import http from 'http'
import assert from 'assert'
import chai from 'chai'
import chaiHttp from 'chai-http'

import server from '../server'

const should = chai.should()

chai.use(chaiHttp)

describe('Fproject node Server', () => {
  it('it should return 200', (done) => {
	  chai.request(server)
	      .get('/')
	      .end((err, res) => {
	          res.should.have.status(200);
						res.body.should.be.a('object');
						res.body.should.have.property('message');
	          res.body.message.should.be.eql("Fproject it's up & running")
	        done();
	      })
  })
})