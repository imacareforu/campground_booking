export interface BookingItem {
    bookingDate:string,
    checkoutDate:string,
    user:string,
    campground:string,
    createAt:string
}

export interface CarJson {
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