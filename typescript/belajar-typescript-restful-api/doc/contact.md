# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
   "first_name" : "Muhammad Fajar",
   "last_name" : "Fajar",
   "email" : "fajar@example.com",
   "phone" : "0858989898"
}
```

Request Body (Success):

```json
{
   "data" : {
      "id" : 1,
      "first_name" : "Muhammad Fajar",
      "last_name" : "Fajar",
      "email" : "fajar@example.com",
      "phone" : "0858989898"
   }
}
```

Request Body (Failed):

```json
{
   "errors" :  "first_name must not blank, ..."
}
```

## Get Contact

Endpoint : GET /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Request Body (Success):

```json
{
   "data" : {
      "id" : 1,
      "first_name" : "Muhammad Fajar",
      "last_name" : "Fajar",
      "email" : "fajar@example.com",
      "phone" : "0858989898"
   }
}
```

Request Body (Failed):

```json
{
   "errors" :  "Contact is not found
}
```
## Update Contact
Endpoint : PUT /api/contacts/id

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
   "first_name" : "Muhammad Fajar",
   "last_name" : "Fajar",
   "email" : "fajar@example.com",
   "phone" : "0858989898"
}
```

Request Body (Success):

```json
{
   "data" : {
      "id" : 1,
      "first_name" : "Muhammad Fajar",
      "last_name" : "Fajar",
      "email" : "fajar@example.com",
      "phone" : "0858989898"
   }
}
```

Request Body (Failed):

```json
{
   "errors" :  "first_name must not blank, ..."
}
```
## Remove Contact

Endpoint : DELETE /api/contacts/id

Request Header :
- X-API-TOKEN : token

Request Body (Success):

```json
{
   "data" : "OK"
}
```

Request Body (Failed)

```json
{
   "errors" :  "Contact is not found"
}
```
## Search Contact

Endpoint : GET /api/contacts

Query Parameter :
- name : string, contact firt name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :
- X-API-TOKEN : token

Request Body (Success):

```json
{
   "data" : [
      {
      "id" : 1,
      "first_name" : "Muhammad Fajar",
      "last_name" : "Fajar",
      "email" : "fajar@example.com",
      "phone" : "0858989898"
      },
      {
      "id" : 2,
      "first_name" : "Muhammad Fajar",
      "last_name" : "Fajar",
      "email" : "fajar@example.com",
      "phone" : "0858989898"
      }
   ],
   "paging" : {
      "current_page" : 1,
      "total_page" : 10,
      "size: 10
   }
}
```

Request Body (Failed):

```json
{
   "errors" :  "Unauthorize"
}
```

