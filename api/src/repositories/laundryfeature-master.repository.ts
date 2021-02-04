import {DefaultCrudRepository} from '@loopback/repository';
import {LaundryfeatureMaster, LaundryfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LaundryfeatureMasterRepository extends DefaultCrudRepository<
  LaundryfeatureMaster,
  typeof LaundryfeatureMaster.prototype.id,
  LaundryfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(LaundryfeatureMaster, dataSource);
  }
}
