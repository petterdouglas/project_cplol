import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()
const prisma = new PrismaClient()

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(cors({
    origin: 'http://localhost:5173', // Ou o endereço da sua aplicação frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}))

app.post('/form', async (req, res) => {
    await prisma.team.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            leadNick: req.body.leadNick,
            name1: req.body.name1,
            member1: req.body.member1,
            position1: req.body.position1,
            name2: req.body.name2,
            member2: req.body.member2,
            position2: req.body.position2,
            name3: req.body.name3,
            member3: req.body.member3,
            position3: req.body.position3,
            name4: req.body.name4,
            member4: req.body.member4,
            position4: req.body.position4,
            name5: req.body.name5,
            member5: req.body.member5,
            position5: req.body.position5,
            icon: req.body.icon
        }
    })
    res.status(201).json(req.body)
})

app.get('/form', async (req, res) => {
    const teams = await prisma.team.findMany()
    res.status(200).json(teams)
})

app.put('/form/:id', async (req, res) => {
    await prisma.team.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            leadNick: req.body.leadNick,
            name1: req.body.name1,
            member1: req.body.member1,
            position1: req.body.position1,
            name2: req.body.name2,
            member2: req.body.member2,
            position2: req.body.position2,
            name3: req.body.name3,
            member3: req.body.member3,
            position3: req.body.position3,
            name4: req.body.name4,
            member4: req.body.member4,
            position4: req.body.position4,
            name5: req.body.name5,
            member5: req.body.member5,
            position5: req.body.position5,
            icon: req.body.icon
        }
    })
    res.status(202).json(req.body)
})

app.delete('/form/:name', async (req, res) => {
    await prisma.team.delete({
        where: {
            name: req.params.name
        }
    })
    res.status(200).json({ message: "Time deletado com sucesso!" })
})

app.listen(3000)