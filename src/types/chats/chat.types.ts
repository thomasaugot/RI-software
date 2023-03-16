export type ChatHeaderTypes = {
    imgUrl: string,
    name: string,
    status: string
}

export type ChatMessageTypes = {
    owner: boolean,
    time: string,
    text: string,
    ownerName: string,
    file?: string,
    imgUrl?: string
}

export type ChatCardTypes = {
    imgUrl?: string,
    text: string,
    name: string,
    notif?: number
}