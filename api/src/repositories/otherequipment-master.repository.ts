import {DefaultCrudRepository} from '@loopback/repository';
import {OtherequipmentMaster, OtherequipmentMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OtherequipmentMasterRepository extends DefaultCrudRepository<
  OtherequipmentMaster,
  typeof OtherequipmentMaster.prototype.id,
  OtherequipmentMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(OtherequipmentMaster, dataSource);
  }
}
