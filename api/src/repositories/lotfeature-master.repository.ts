import {DefaultCrudRepository} from '@loopback/repository';
import {LotfeatureMaster, LotfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LotfeatureMasterRepository extends DefaultCrudRepository<
  LotfeatureMaster,
  typeof LotfeatureMaster.prototype.id,
  LotfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(LotfeatureMaster, dataSource);
  }
}
