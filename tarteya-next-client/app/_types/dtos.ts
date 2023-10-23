import { HttpStatusCode } from "axios"

export type ServerResponse<T = any> = {
    statusCode: HttpStatusCode
    message: string[]
    data?: T
}
export type TokenResponse = {
    access_token: string
    refresh_token: string
}