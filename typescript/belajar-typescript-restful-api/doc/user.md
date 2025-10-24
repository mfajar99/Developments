#User Api Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
   "username" : "fajar",
   "password" : "rahasia",
   "name" : "Muhammad Fajar"
}
```
Response Body (Success) :

```json
{
   "data" : {
      "username" : "fajar",
      "name" : "Muhammad Fajar"
   }
}
```

Response Body (Failed) :

```json
{
   "errors" : "Username must not balank, ..."
}
```

## Login User

Endpoint : POST /api/users/login 

Request Body :

```json
{
   "username" : "fajar",
   "password" : "rahasia",
}
```
Response Body (Success) :

```json
{
   "data" : {
      "username" : "fajar",
      "name" : "Muhammad Fajar",
      "token" : "uuid"
   }
}
```

Response Body (Failed): 

```json
{
   "errors" : "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) : 

```json
{
   "data" : {
      "username" : "fajar",
      "name" : "Muhammad Fajar"
   }
}
```

Response Body (Failed): 

```json
{
   "errors" : "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
   "password" : "rahasia",   // tidak wajib
   "name" : "Muhammad Fajar" // tidak wajib
}
```
Response Body (Success) :

```json
{
   "data" : {
      "username" : "fajar",
      "name" : "Muhammad Fajar"
   }
}
```

Response Body (Failed) :

```json
{
   "errors" : "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
   "data" : "OK"
}
```

Response Body (Failed) :

```json
{
   "errors" : "Unauthorized, ..."
}
```
