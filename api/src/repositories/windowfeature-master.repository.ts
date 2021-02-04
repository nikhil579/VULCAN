import {DefaultCrudRepository} from '@loopback/repository';
import {WindowfeatureMaster, WindowfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WindowfeatureMasterRepository extends DefaultCrudRepository<
  WindowfeatureMaster,
  typeof WindowfeatureMaster.prototype.id,
  WindowfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(WindowfeatureMaster, dataSource);
  }
}
