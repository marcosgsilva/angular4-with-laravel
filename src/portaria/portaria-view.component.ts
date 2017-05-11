import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import {ActivatedRoute} from "@angular/router";
@Component({templateUrl:'./portaria-view.component.html'})

export class PortariaViewComponent{
    public visitante: any = {};

    constructor(
        private httpService: AppHttpService,
        private route : ActivatedRoute){}


    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            });
    }

    view(id: number) {
        this.httpService.builder('visitantes')
            .view(id)
            .then((res) => {
                this.visitante = res;
            })
    }
}
