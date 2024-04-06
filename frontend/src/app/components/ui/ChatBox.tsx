"use client"
import React, { useEffect,useState, useRef } from 'react';
const { publicEncrypt, privateDecrypt } = require('crypto');
import ChatMessage from './ChatMessage';

import { socket } from "../../../socket";





const ChatBox: React.FC = () => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState<any[]>([]);
    const [room, setRoom] = useState(123);
    const [user, setUser] = useState<string | null>('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:4000/user/${localStorage.getItem('userid')}`);
            const user = await res.json();
            setUser(user.user);
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        const joinRoom = async () => {
            await socket.emit("join_room", room);
            console.log(`Joined room ${room}`);
        };
    
        joinRoom();
    }, [room]);

    const handleSend = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: user,
                message: currentMessage,
            };

            await socket.emit("send_message", messageData);
            setCurrentMessage("");
            console.log("function ran");
        }
    };

    const messageHandler = (data: any) => {
        setMessageList((prevMessages) => [...prevMessages, data]);
    };
    
    useEffect(() => {
        const handler = (data: any) => {
            messageHandler(data);
        };
    
        socket.on("receive_message", handler);
    
        return () => {
            socket.off("receive_message", handler);
        };
    }, []);

    return (
        <div className="bg-slate-300 h-screen w-full flex justify-center">
            <div className="flex flex-col w-[900px] max-h-full bg-gray-700 mt-10 mb-8 rounded-2xl relative">
                <div className="flex justify-center my-4 text-lg font-bold text-white">
                    <p>ROOM {room}</p>
                </div>
                <div className="overflow-auto scrollbar mr-2 scrollbar-thumb-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full justify-between mb-9 scrollbar-w-sm">
                    {messageList.map((message) => {
                        return (
                            <div
                                key={message.author._id}
                                className={`rounded-xl mb-4 px-2 mx-2 mr-6 flex flex-col text-white text-right  ${
                                    message.author._id === user._id
                                        ? "items-end bg-slate-400"
                                        : "bg-slate-600"
                                } `}
                            >
                                <div className="flex ml-1 text-lg">
                                    <p>{message.message}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-row absolute bottom-0 justify-around p-1 max-h-12 bg-slate-600 w-full rounded-md">
                    <input
                        className="flex px-2 w-full rounded-md"
                        type="text"
                        placeholder="hello..."
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        value={currentMessage}
                        onKeyPress={(e) => {
                            e.key === "Enter" && handleSend();
                        }}
                    />
                    <button
                        className="flex flex-row text-lg p-1 ml-[4px] bg-slate-800 rounded-md text-white"
                        onClick={handleSend}
                    >
                        Send{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
