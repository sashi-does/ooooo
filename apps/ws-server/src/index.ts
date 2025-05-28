import { WebSocketServer } from 'ws';
import {prisma} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    console.log(user)
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});