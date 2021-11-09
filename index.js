const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())
app.use(express.json())

let con;
const log = (req, res, next) => {
    con =
        mysql.createConnection({
            user: '242777',
            host: 'mysql-miguelhuayhua.alwaysdata.net',
            password: '69848691mike.',
            database: 'miguelhuayhua_bd_venta_platos'
        })
    next()
}
app.use(log)
app.set('port', process.env.PORT || 3000)

app.get('/cliente', (req, res) => {
    let datos = con.query("SELECT * from clientes", [], (e, done) => {
        if (e) throw e
        else {
            let data = JSON.parse(JSON.stringify(done))
            res.send(data)
        }
    })
})


app.get('/platos', (req, res) => {
    let datos = con.query("SELECT * from plato", [], (e, done) => {
        if (e) throw e
        else {
            let data = JSON.parse(JSON.stringify(done))
            res.send(data)
        }
    })
})

app.get('/d_compra', (req, res) => {
    let datos = con.query("SELECT * from detalle_compra", [], (e, done) => {
        if (e) throw e
        else {
            let data = JSON.parse(JSON.stringify(done))

            res.send(data)
        }
    })
})
app.get('/compra', (req, res) => {
    let datos = con.query("SELECT * from compra", [], (e, done) => {
        if (e) throw e
        else {
            let data = JSON.parse(JSON.stringify(done))

            res.send(data)
        }
    })
})
app.listen(app.get('port'), () => console.log(`T`))