import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';


@inject(Router, Service)
export class View {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
    }

    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;

        this.cancelCallback = this.context.cancelCallback;
        this.deleteCallback = this.context.deleteCallback;
        this.editCallback = this.context.editCallback;
        this.saveCallback = this.context.saveCallback;
    }

    list() {
        this.router.navigateToRoute('list');
    }

    cancelCallback(event) {
        this.list();
    }

    saveCallback(event) {
        var er={};
        if(!parseFloat(this.data.longitude)){
            er.longitude = "longitude harus angka";
            this.error = er;
        }
        if(!parseFloat(this.data.latitude)){
            er.latitude = "latitude harus angka";
            this.error = er;
        }
        if(!parseFloat(this.data.salesTarget)){
          er.salesTarget = "Sales Target harus angka";
          this.error = er;
        }
        if(!parseFloat(this.data.monthlyTotalCost)){
          er.monthlyTotalCost = "Monthly Total Cost harus angka";
          this.error = er;
        }
        if(!er.longitude && !er.latitude){
            this.service.update(this.data)
            .then(result => {
                this.cancelCallback();
            })
            .catch(e => {
                this.error = e;
            })
        }
        
    }

}

