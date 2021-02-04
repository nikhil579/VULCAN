import {DefaultCrudRepository} from '@loopback/repository';
import {FencingMaster, FencingMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FencingMasterRepository extends DefaultCrudRepository<
  FencingMaster,
  typeof FencingMaster.prototype.id,
  FencingMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(FencingMaster, dataSource);
  }
}
