import { HttpStatus } from "@nestjs/common"

export type GlobalResponseDto = {
    message?: string | string[]
    statusCode: HttpStatus
    data?: any
}