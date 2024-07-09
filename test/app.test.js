const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Modify this line if necessary
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello, World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
