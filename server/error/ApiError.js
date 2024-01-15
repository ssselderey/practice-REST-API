class ApiError{ // для вывода ошибок
    constructor(status, message) {
        //super();
        this.status = status
        this.message = massage

    }
    static badRequest(message){
        return new ApiError(484, message)
    }
    static internal(message){
        return new ApiError(500, message)
    }
    static forbidden(message){
        return new ApiError(483, message)
    }
}
