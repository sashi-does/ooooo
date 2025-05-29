import { prisma } from "@repo/db/client"

export default async function Page() {
  const user = await prisma.user.findFirst({})
  return <div>
      <h1>Hi There this is a test of CI/CD workflow</h1>
      {user?.username}
      {user?.password}
  </div>
}