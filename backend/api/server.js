import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()
const prisma = new PrismaClient()
const port = process.env.PORT || 3000

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())

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

app.get('/', async (req, res) => {
    await res.status(200).send("ONLINE")
})

app.listen(port)