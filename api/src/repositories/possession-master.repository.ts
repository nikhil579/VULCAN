import {DefaultCrudRepository} from '@loopback/repository';
import {PossessionMaster, PossessionMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PossessionMasterRepository extends DefaultCrudRepository<
  PossessionMaster,
  typeof PossessionMaster.prototype.id,
  PossessionMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(PossessionMaster, dataSource);
  }
}
