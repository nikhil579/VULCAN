import {DefaultCrudRepository} from '@loopback/repository';
import {SoiltypeMaster, SoiltypeMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SoiltypeMasterRepository extends DefaultCrudRepository<
  SoiltypeMaster,
  typeof SoiltypeMaster.prototype.id,
  SoiltypeMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(SoiltypeMaster, dataSource);
  }
}
