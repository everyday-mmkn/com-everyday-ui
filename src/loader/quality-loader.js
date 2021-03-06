import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'master/qualities';

module.exports = function(keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter), size: 10  })
        .then(results => {
            return results.data.map(step => {
                step.toString = function () {
                    return `${this.name}`;
                }
                return step;
            });
        });
}