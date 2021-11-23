import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {

    constructor() { }

    public getByName(name: string): string {
        return `Your pokemon is: ${ name }`;
    }
    
}