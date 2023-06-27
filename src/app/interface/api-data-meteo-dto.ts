export interface ApiDataMeteoDto {
    hourly_units:{
        temperature_2m:string,
        rain:string,
        uv_index:string
    },
    hourly:{
        time:string[],
        temperature_2m:number[],
        rain:number[],
        uv_index:number[]
    }
}

export interface ApiCityCodePostalDto{
    nom:string,
    code:string,
    codeDepartement:string,
    codesPostaux:string[]
}

