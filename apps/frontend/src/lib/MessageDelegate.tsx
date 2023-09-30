"use client";

import { useReadMessage } from "@/hooks/useSettings"
import message from "antd/es/message";


export default function MessageDelegate(){

    const {message:messageContent,messageType} = useReadMessage()

    const [messageApi, contextHolder] = message.useMessage();

    if(messageContent && messageType){
        messageApi[messageType](messageContent)
    }


    return contextHolder
}