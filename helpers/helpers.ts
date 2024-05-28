import chai from 'chai'
import chaiHttp from 'chai-http'
import fs from "fs";
chai.use(chaiHttp);
chai.should()
const expect = chai.expect;
const baseUrl = 'http://0.0.0.0:8545'


export function postResponse(payload: object){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(payload),
    };

    return fetch(baseUrl, requestOptions);
};

export function verifyResponseObjects(res: Response, statusCode: number = 200){
    res.should.be.a('Response');
    res.should.have.status(statusCode);
};

export function verifySchema(path: any, body: object){
    const expectedSchema = JSON.parse(fs.readFileSync(path).toString());
    return expect(body).to.be.jsonSchema(expectedSchema);
}