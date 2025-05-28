import express from 'express'
import {prisma} from "@repo/db/client"

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/signup', async (req,res) => {
    const username = req.body.username
    const password = req.body.password 

    try {
        const user = await prisma.user.create({
            data: {
                username,
                password
            }
        })
        res.json({
            message: "User created",
            userId: user.id
        })
    } catch (e) {
        res.json({
            message: "Error occurred"
        })
    }
})

app.listen(3001)