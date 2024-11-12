export interface BookingItem {
    _id:string,  
    bookingDate:string,
    checkoutDate:string,
    user:string,
    campground:CampgroundItem
}

export interface CampgroundJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CampgroundItem[]
}

export interface CampgroundItem {
    _id : string
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}