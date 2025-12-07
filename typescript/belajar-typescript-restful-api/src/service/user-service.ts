import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../erorr/response";
import { CreateUserRequest, LoginUserRequest, toUserResponse, UpdateUserRequest, UserResponse } from "../model/user-model";
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

   static async get(user: User): Promise<UserResponse> {
      return toUserResponse(user);
   }

   static async update(user: User, request: UpdateUserRequest): Promise<UserResponse> {
      // Validasi input update (nama / password)
      const updateRequest = Validation.validate(UserValidation.UPDATE, request);

      // Jika ada nama baru, ubah nama user
      if (updateRequest.name) {
         user.name = updateRequest.name;
      }

      // Jika ada password baru, hash dulu sebelum disimpan
      if (updateRequest.password) {
         user.password = await bcript.hash(updateRequest.password, 10);
      }

      // ❗ PERINGATAN:
      // Di sini kamu mengirim seluruh object "user" ke Prisma.
      // Ini berbahaya karena:
      // - Field yang tidak seharusnya di-update bisa ikut berubah
      // - Field seperti token, createdAt, updatedAt juga bisa ikut ter-overwrite
      // - Prisma lebih menyarankan mengirim data update yang explicit saja

      const result = await prismaClient.user.update({
         where: {
            username: user.username
         },
         data: user // ⛔ Sebaiknya jangan kirim full object ke sini
      });

      // Ubah hasil update ke bentuk response user
      return toUserResponse(result);
   }


}