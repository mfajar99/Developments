import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../erorr/response";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
   if (error instanceof ZodError) {
      return res.status(400).json({
         errors: error.errors
      });
   }

   if (error instanceof ResponseError) {
      return res.status(error.status).json({
         errors: error.message
      });
   }

   // fallback untuk error lain yang tidak terduga
   return res.status(500).json({
      errors: "Internal Server Error",
      message: error.message
   });
};
