import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";


function globalErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let errorStatusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorDetails = err;

    // for PrismaClientValidationError
    if (err instanceof Prisma.PrismaClientValidationError) {
        errorStatusCode = 400;
        errorMessage = "You have provided incorrect field type or missing fields!"
    }

    // for PrismaClientKnownRequestError
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            errorStatusCode = 400;
            errorMessage = "An operation failed because it depends on one or more records that were required but not found";
        }
        else if (err.code === "2002") {
            errorStatusCode = 400;
            errorMessage = "Unique constraint failed";
        }
    }

    // for PrismaClientUnknownRequestError
    if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        errorStatusCode = 500;
        errorMessage = "Error occurred during query execution";
    }

    // PrismaClientInitializationError
    if (err instanceof Prisma.PrismaClientInitializationError) {
        if (err.errorCode === "P1000") {
            errorStatusCode = 401;
            errorMessage = "Authentication failed. Please check your credentials"
        }
        else if (err.errorCode === "P1001") {
            errorStatusCode = 400;
            errorMessage = "Can't reach database server"
        }
    }


    res.status(errorStatusCode).json({
        message: errorMessage,
        error: errorDetails
    })
}

export default globalErrorHandler;