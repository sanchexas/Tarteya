import { HttpStatusCode } from "axios"

export type ServerResponse<T = any> = {
    statusCode: HttpStatusCode
    message: string[]
    data?: T
}