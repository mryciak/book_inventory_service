var request = require('supertest');
var inMemoryRepository = require('../src/inMemoryStockRepository');
var app = require('../src/app')(inMemoryRepository);


describe('Book inventory', function() {
    it('allows to stock...', function(done) {
        request(app)
            .post('/stock')
            .send({
                isbn: "234234124",
                count: 1034,
            })
            .expect({
                isbn: "234234124",
                count: 1034,
            }, done);
    });
});
