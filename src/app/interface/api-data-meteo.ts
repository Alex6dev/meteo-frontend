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