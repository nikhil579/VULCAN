import {DefaultCrudRepository} from '@loopback/repository';
import {SeverMaster, SeverMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SeverMasterRepository extends DefaultCrudRepository<
  SeverMaster,
  typeof SeverMaster.prototype.id,
  SeverMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(SeverMaster, dataSource);
  }
}
