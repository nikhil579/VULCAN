import {DefaultCrudRepository} from '@loopback/repository';
import {CurrentuseMaster, CurrentuseMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CurrentuseMasterRepository extends DefaultCrudRepository<
  CurrentuseMaster,
  typeof CurrentuseMaster.prototype.id,
  CurrentuseMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(CurrentuseMaster, dataSource);
  }
}
