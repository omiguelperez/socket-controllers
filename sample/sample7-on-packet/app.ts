import "reflect-metadata";
import {createSocketServer} from "../../src/index";
import {PacketController} from "./PacketController";

createSocketServer(3001, {
    controllers: [PacketController],
}); // creates socket.io server and registers all controllers there

console.log("Socket.io is up and running on port 3001. Send messages via socket-io client.");