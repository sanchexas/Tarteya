import { HttpStatusCode } from "axios"

export type ServerResponse<T = any> = {
    statusCode: HttpStatusCode
    message?: string | string[]
    data?: T
}