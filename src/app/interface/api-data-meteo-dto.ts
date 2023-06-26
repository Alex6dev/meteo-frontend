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

export interface UnitsDataMeteo{
    temperature_2m:string,
    rain:string,
    uv_index:string
}

export interface ApiDataMeteo {
    time:string[],
    temperature_2m:number[],
    rain:number[],
    uv_index:number[]
}

