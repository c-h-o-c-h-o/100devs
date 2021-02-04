var chai = require('chai');
var sinon = require('sinon');
var axios = require('axios');

const chaiAsPromised = require("chai-as-promised");
const owlbot = require('./index.js')

chai.use(chaiAsPromised);

after(function () {
    sinon.restore();
});

it('Should throw an error if Owlbot client initiated without a token', () => {
  chai.expect(function(){owlbot();}).to.throw();
})

it('Should throw an error if define method is called without a word',  async() => {
  const client = owlbot('123');
  await chai.expect(client.define()).to.be.rejected
})

it('define method send a get request to the endpoint using axios', function () {
    const fake_client = sinon.fake();
    const fake_promised = sinon.fake();
    const fake_then = sinon.fake();
    fake_promised.then = sinon.fake.returns(fake_then);
    fake_then.catch = sinon.fake();
    fake_client.get = sinon.fake.returns(fake_promised);
    sinon.replace(axios, 'create', sinon.fake.returns(fake_client));
    const client = owlbot('123');
    client.define('hello')
    chai.assert(fake_client.get.calledWith('/api/v4/dictionary/hello'));
});