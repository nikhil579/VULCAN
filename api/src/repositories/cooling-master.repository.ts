import {DefaultCrudRepository} from '@loopback/repository';
import {CoolingMaster, CoolingMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CoolingMasterRepository extends DefaultCrudRepository<
  CoolingMaster,
  typeof CoolingMaster.prototype.id,
  CoolingMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(CoolingMaster, dataSource);
  }
}
