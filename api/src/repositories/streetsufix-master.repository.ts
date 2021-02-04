import {DefaultCrudRepository} from '@loopback/repository';
import {StreetsufixMaster, StreetsufixMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StreetsufixMasterRepository extends DefaultCrudRepository<
  StreetsufixMaster,
  typeof StreetsufixMaster.prototype.id,
  StreetsufixMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(StreetsufixMaster, dataSource);
  }
}
