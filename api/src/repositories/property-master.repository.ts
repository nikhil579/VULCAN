import {DefaultCrudRepository} from '@loopback/repository';
import {PropertyMaster, PropertyMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PropertyMasterRepository extends DefaultCrudRepository<
  PropertyMaster,
  typeof PropertyMaster.prototype.id,
  PropertyMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(PropertyMaster, dataSource);
  }
}
