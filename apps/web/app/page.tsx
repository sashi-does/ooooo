import { prisma } from "@repo/db/client"

export default async function Page() {
  const user = await prisma.user.findFirst({})
  return <div>
      {user?.username}
      {user?.password}
  </div>
}