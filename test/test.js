const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app');

chai.use(chaiHttp); // Active chai-http

const { expect } = chai; // N'utiliser que `expect`, pas `request`

describe("GET /", () => {
    it("should return Hello World", (done) => {
        chai.request(app)  // ✅ Utilisation correcte de `chai.request`
            .get("/")
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});
