import {OnConnect, SocketController, ConnectedSocket, OnDisconnect, OnPacket, MessageBody} from "../../src/decorators";

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

    @OnPacket()
    packet(@ConnectedSocket() socket: any,
           @MessageBody() body: any) {
        console.log("packet");
        console.log("body", body);
    }

}