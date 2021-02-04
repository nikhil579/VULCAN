import {DefaultCrudRepository} from '@loopback/repository';
import {HeatingMaster, HeatingMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HeatingMasterRepository extends DefaultCrudRepository<
  HeatingMaster,
  typeof HeatingMaster.prototype.id,
  HeatingMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(HeatingMaster, dataSource);
  }
}
