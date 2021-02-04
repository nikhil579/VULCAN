import {DefaultCrudRepository} from '@loopback/repository';
import {WatersourceMaster, WatersourceMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WatersourceMasterRepository extends DefaultCrudRepository<
  WatersourceMaster,
  typeof WatersourceMaster.prototype.id,
  WatersourceMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(WatersourceMaster, dataSource);
  }
}
