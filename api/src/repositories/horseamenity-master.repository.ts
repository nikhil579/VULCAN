import {DefaultCrudRepository} from '@loopback/repository';
import {HorseamenityMaster, HorseamenityMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HorseamenityMasterRepository extends DefaultCrudRepository<
  HorseamenityMaster,
  typeof HorseamenityMaster.prototype.id,
  HorseamenityMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(HorseamenityMaster, dataSource);
  }
}
