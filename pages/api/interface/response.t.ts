export interface ResponseDto {
    data?: {} | any;
    success?: boolean;
    error?: {};
}

export const DefaultErrorResponse: ResponseDto = {
    data: {},
    success: false,
    error: {}
}
export const DefaultSuccessResponse: ResponseDto = {
    data: {},
    success: true,
    error: {}
}