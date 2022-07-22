import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createUser = async () => await prisma.user.create({
    data: {
        name: 'Josue',
        email: 'shuga@test.io',
        age: 34,
        userPreference: {
            create: {
                emailUpdates: true
            }
        }
    },
    include: {
        userPreference: true
    }
})


async function main() {
    // await prisma.user.deleteMany()
    // await createUser()
    const result = await prisma.user.findMany({
        include: {
            userPreference: true
        }
    })
    console.log(result)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
