import { Server, Socket } from 'socket.io';

import { logger } from './logger';
// import { connectRedis } from './redis';

const socketio = async (server: any) => {
  try {
    // Socket communication
    const io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', async (socket: Socket) => {
      const id = (socket as any).user?.user?.id;
      console.log(`socket (${socket.id}) -> ${id}`);
    });


    logger.info('  Socket server is running');
  } catch (err) {
    logger.error('  Socket server run failed');
    console.error(err);
  }
};

export default socketio;
