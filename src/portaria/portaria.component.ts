import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
@Component({templateUrl:'./portaria.component.html'})

export class PortariaComponent{
    public visitantes: any[];

    constructor(private httpService: AppHttpService){}

    ngOnInit(){
        this.httpService
            .builder('visitantes')
            .list()
            .then((res)=>{
            this.visitantes = res.data;
            });

    }
    view(id:number){
        this.httpService
            .builder('visitantes')
            .view(id)
            .then((res)=>{
                this.visitantes = res.data;
            });

    }
}
