import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class View {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    activate(params) {
        var id = params.id;
        console.log(params);
        this.service.getById(id)
            .then(data => {
                this.data = data;
            })
    }

    list() {
        this.router.navigateToRoute('list');
    }
}
