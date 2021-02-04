import {DefaultCrudRepository} from '@loopback/repository';
import {UtilityMaster, UtilityMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UtilityMasterRepository extends DefaultCrudRepository<
  UtilityMaster,
  typeof UtilityMaster.prototype.id,
  UtilityMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(UtilityMaster, dataSource);
  }
}
