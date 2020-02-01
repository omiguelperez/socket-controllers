import {OnConnect, SocketController, ConnectedSocket, OnDisconnect} from "../../src/decorators";

@SocketController()
export class PacketController {

    @OnConnect()
    connection(@ConnectedSocket() socket: any) {
        console.log("client connected");
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("client disconnected");
    }

}