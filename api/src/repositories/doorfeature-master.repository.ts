import {DefaultCrudRepository} from '@loopback/repository';
import {DoorfeatureMaster, DoorfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DoorfeatureMasterRepository extends DefaultCrudRepository<
  DoorfeatureMaster,
  typeof DoorfeatureMaster.prototype.id,
  DoorfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(DoorfeatureMaster, dataSource);
  }
}
