import { Category } from "./category"

export interface ProductResponse{
  "statusCode": number,
  "message": string,
  "totalData": number,
  "totalPage": number,
  "currentPage": number,
  "perPage": number,
  "data": [Product]
}
export interface Product{
  "_id":string,
  "name": string,
  "sku": string,
  "description": string,
  "basePrice": any,
  "suplier": string,
  "brand": string,
  "weight": any,
  "sizeMeasures":[SizeMeasures],
  "video": string,
  "hasOptions": true,
  "categories":[Category],
  "isActive": boolean,
  "isSaleable": boolean,
  "isBestSeller": boolean,
  "isNewlyLaunched": boolean,
  "isDeleted": boolean,
  "status": string,
  "images":[Image],
  "variants":[variant],
  "priceBook":[PriceBook],
  "price": number,
  "isBookmarked": boolean
}
export interface  PriceBook {
  "currency": string,
  "isoCode": string,
  "symbol": string
}

export interface variant
{
  "_id": string,
  "productId": string,
  "name": string,
  "sku": string,
  "description": string,
  "basePrice": number,
  "isDeleted": boolean,
  "size": string,
  "status": string
}
export interface   SizeMeasures {
  "height": number,
  "width": number
}
export interface Image{
  
    "_id": string,
    "productId": string,
    "image": string,
    "isDefault": boolean,
    "isThumbnail": boolean,
    "isActive": boolean

}
