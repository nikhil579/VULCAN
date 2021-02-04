import {DefaultCrudRepository} from '@loopback/repository';
import {OccupantMaster, OccupantMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OccupantMasterRepository extends DefaultCrudRepository<
  OccupantMaster,
  typeof OccupantMaster.prototype.id,
  OccupantMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(OccupantMaster, dataSource);
  }
}
