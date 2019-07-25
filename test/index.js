const should = require('should')
const sleep = require('../index')
describe('#SleepMS', () => {
  it('should sleep 5 sec.', done => {
    sleep.SleepMS(5000);
    done();
  })
})

