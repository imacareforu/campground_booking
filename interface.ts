export interface BookingItem {
    _id:string,  
    bookingDate:string,
    checkoutDate:string,
    user:string,
    campground:CampgroundItem
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem[]
}

export interface CampgroundJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CampgroundItem[]
}

export interface CampgroundItem {
    _id : string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}

export interface UserItem {
  _id : string,
  name : string,
  email : string,
  tel : string,
  role : string,
  password : string,
  createAt : Date
}