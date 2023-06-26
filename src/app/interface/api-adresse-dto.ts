export interface ApiAdresseDto {
    features:Feature[],
}
export interface Feature{
    geometry:{
        coordinates:number[]
    }
    properties:{
        city:string,
        postcode:number
    }
}
