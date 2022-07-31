const {assert} = require('chai')

const request = require('supertest')

const app = require('../server')

describe('Creacion de un post', function () {

    it('Retorna un error si text esta vacio', function (done) {

        request(app)
            .get('/products')
            .send({text: ""})
            .expect(400, done)
    })

    it('Retorna un objeto con el id  del post', function (done) {
        request(app)
            .get('/products')
            .send({text: ""})
            .expect(200)
            .then(response =>{
                assert.isObject(response.body)
                assert.isString(response.body.id)

            })

        return done()   
    })



})

