import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService{
    private url: string;

    constructor(
        private http: Http){}

    builder(resource: string){
        this.url='http://192.168.10.10:8000/api/'+resource;
        return this;
    }
    list(){
        let url = this.url;

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(url)
            .toPromise()
            .then((res)=>{
               // return res.json() || {};
                return res.json() || {};
            });
    }

    view (id: number) {
        let url = this.url + '/' + id ;

        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }
    edit (id: number) {
        let url = this.url + '/' + id ;

        return this.http.put(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }
}