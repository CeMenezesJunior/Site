import { PrismaClient } from '@prisma/client'

(async() =>{
    const prisma = new PrismaClient()
    const Projeto = await prisma.projeto.count()
    console.log(Projeto)
})