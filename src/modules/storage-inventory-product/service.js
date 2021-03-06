import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const serviceUriStorages = 'inventories/monitoring';

export class Service extends RestService {

  constructor(http, aggregator, config, api) {
    super(http, aggregator, config, "master");
  }

  // getAllInventory(storageId, keyword)
  // {
  //   var config = Container.instance.get(Config);
  //   var endpoint = config.getEndpoint("inventory").client.baseUrl + 'storages/' + storageId+ '/inventories?keyword=' + keyword; 
  //   return super.get(endpoint);
  // }

  getAllInventorybyItemId(itemCode) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-search?itemCode=${itemCode}`;
    return super.get(endpoint);
  }
  getAllMovement(storageId, itemId) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + 'storages/' + storageId + "/inventories/" + itemId + "/movements";
    return super.get(endpoint);
  }

  generateAllInventoryExcel(itemCode) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-search/download?itemCode=${itemCode}`;
    return super.getXls(endpoint);
  }
}