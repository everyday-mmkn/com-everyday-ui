import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";
import { debug } from 'util';

const resource = 'master/products/null-tags';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter), order: JSON.stringify({ "name": "asc" }), size: 10 })
        .then(results => {

            return results.data;
        });
}