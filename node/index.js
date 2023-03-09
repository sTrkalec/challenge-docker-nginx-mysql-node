const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const name = faker.name.findName()

    connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)

    connection.query(`SELECT nome FROM people`, (error, results, fields) => {
        res.send(`

    <body style="    
    background-color: gray;
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;">
        <h1>Full Cycle Rocks!</h1>
        <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
        </ol>
    </body>
    `)
    })
})

app.listen(port, () => {
    console.log('Up on:', port);
})