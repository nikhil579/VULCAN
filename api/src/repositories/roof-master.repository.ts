import {DefaultCrudRepository} from '@loopback/repository';
import {RoofMaster, RoofMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RoofMasterRepository extends DefaultCrudRepository<
  RoofMaster,
  typeof RoofMaster.prototype.id,
  RoofMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(RoofMaster, dataSource);
  }
}
