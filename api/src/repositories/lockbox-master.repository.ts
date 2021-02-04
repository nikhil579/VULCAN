import {DefaultCrudRepository} from '@loopback/repository';
import {LockboxMaster, LockboxMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LockboxMasterRepository extends DefaultCrudRepository<
  LockboxMaster,
  typeof LockboxMaster.prototype.id,
  LockboxMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(LockboxMaster, dataSource);
  }
}
