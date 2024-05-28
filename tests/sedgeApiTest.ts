import chai from 'chai'
import * as helpers from '../helpers/helpers'
import testData from '../helpers/requestPayloads'
const expect = chai.expect;
chai.use(require('chai-json-schema'));

describe('Sedge API hello', function () {

    it('eth_syncing', async function () {
        const response = await helpers.postResponse(testData.syncing);
        helpers.verifyResponseObjects(response)
        const data = await response.json()
        expect(data).to.have.property('id');
        expect(data).to.have.property('result');
        expect(data.jsonrpc).to.be.equal('2.0');
    });

    it('eth_syncing - invlaid parameter', async function () {
        let payload = { ...testData.syncing}
        payload.params = ['testParam']
        const response = await helpers.postResponse(payload);
        helpers.verifyResponseObjects(response)
        const data = await response.json()
        expect(data).to.have.property('id');
        expect(data).to.not.have.property('result');
        expect(data.jsonrpc).to.be.equal('2.0');
        expect(data).to.have.property('error');
        expect(data.error.message).to.be.equal('Invalid params');
    });

    it('blockNumber', async function () {
        const response = await helpers.postResponse(testData.blockNumber);
        helpers.verifyResponseObjects(response)
        const data = await response.json()
        expect(data).to.have.property('id');
        expect(data).to.have.property('result');
        expect(data.jsonrpc).to.be.equal('2.0');
    });

    it('blockNumber - invlaid parameter', async function () {
        let payload = { ...testData.blockNumber}
        payload.params = ['testParam']
        const response = await helpers.postResponse(payload);
        helpers.verifyResponseObjects(response)
        const data = await response.json()
        expect(data).to.have.property('id');
        expect(data).to.not.have.property('result');
        expect(data.jsonrpc).to.be.equal('2.0');
        expect(data).to.have.property('error');
        expect(data.error.message).to.be.equal('Invalid params');
    });

    it('getBlockByNumber', async function () {
        let response = await helpers.postResponse(testData.blockNumber);
        helpers.verifyResponseObjects(response)

        let data = await response.json()
        let payload = { ...testData.getBlockByNumber}
        payload.params = [data.result, true]
        response = await helpers.postResponse(payload);
        helpers.verifyResponseObjects(response)
        data = await response.json()
        helpers.verifySchema('responseSchema/getBlockByNumber.json', data)
    });

    it('getBlockByNumber - no result', async function () {
        let response = await helpers.postResponse(testData.blockNumber);
        helpers.verifyResponseObjects(response)

        let data = await response.json()
        let payload = { ...testData.getBlockByNumber}
        payload.params = ['5', true]
        response = await helpers.postResponse(payload);
        helpers.verifyResponseObjects(response)
        data = await response.json()
        expect(data).to.have.property('id');
        expect(data.jsonrpc).to.be.equal('2.0');
        expect(data.result).to.be.null;
    });

    it('gasPrice', async function () {
        const response = await helpers.postResponse(testData.gasPrice);
        helpers.verifyResponseObjects(response)
        const data = await response.json()
        expect(data).to.have.property('id');
        expect(data).to.have.property('result');
        expect(data.jsonrpc).to.be.equal('2.0');
    });
});
