
export interface EmployeeResponse{
  "statusCode": number,
  "message": string,
  "totalData": number,
  "totalPage": number,
  "currentPage": number,
  "perPage": number,
  data:[Category]
}
export interface Category {

  "_id": string,
  "name": string,
  "parentId": string,
  "description": string,
  "image": string,
  "meta": Meta,
  "position": number,
  "isActive": boolean,

}

export interface Meta {
  "title": string,
  "keywords": string
}
