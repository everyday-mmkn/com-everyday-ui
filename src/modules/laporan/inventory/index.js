export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', '/report'], moduleId: './report', name: 'report', nav: false, title: 'Laporan Stok' }
        ]);
        this.router = router;
    }
}