import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterUseCase {
  name: string
  email: string
  password: string
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUseCase) {
  const passwordHash = await hash(password, 6)

  const userWithSameEmai = await prisma.user.findUnique({ where: { email } })

  if (userWithSameEmai) {
    throw new Error('E-mail already exists')
  }

  await prisma.user.create({
    data: { name, email, password_hash: passwordHash },
  })
}
