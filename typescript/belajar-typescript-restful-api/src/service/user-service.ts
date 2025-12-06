import { prismaClient } from "../application/database";
import { ResponseError } from "../erorr/response";
import { CreateUserRequest, LoginUserRequest, toUserResponse, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcript from "bcrypt";
import crypto from "crypto";
import { v4 as uuid } from "uuid";

export class UserService {

   static async register(request: CreateUserRequest): Promise<UserResponse> {
      const registerRequest = Validation.validate(UserValidation.REGISTER, request);

      const totalUserWithSaneUsername = await prismaClient.user.count({
         where: {
            username: registerRequest.username
         }
      });

      if (totalUserWithSaneUsername != 0) {
         throw new ResponseError(400, "Username already exists");
      }
      registerRequest.password = await bcript.hash(registerRequest.password, 10);

      const user = await prismaClient.user.create({
         data: registerRequest
      });

      return toUserResponse(user);
   }

   static async login(request: LoginUserRequest): Promise<UserResponse> {
      const loginRequest = Validation.validate(UserValidation.LOGIN, request);

      let user = await prismaClient.user.findUnique({
         where: {
            username: loginRequest.username
         }
      });

      if (!user) {
         throw new ResponseError(401, "Username or password is wrong");
      }

      const isPasswordValid = await bcript.compare(loginRequest.password, user.password);
      if (!isPasswordValid) {
         throw new ResponseError(401, "Username or password is wrong")
      }

      user = await prismaClient.user.update({
         where: {
            username: loginRequest.username
         },
         data: {
            token: uuid()
         }
      });

      const response = toUserResponse(user);
      response.token = user.token!;
      return response;
   }

}