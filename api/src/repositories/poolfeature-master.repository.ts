import {DefaultCrudRepository} from '@loopback/repository';
import {PoolfeatureMaster, PoolfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PoolfeatureMasterRepository extends DefaultCrudRepository<
  PoolfeatureMaster,
  typeof PoolfeatureMaster.prototype.id,
  PoolfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(PoolfeatureMaster, dataSource);
  }
}
