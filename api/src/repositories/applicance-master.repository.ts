import {DefaultCrudRepository} from '@loopback/repository';
import {ApplicanceMaster, ApplicanceMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ApplicanceMasterRepository extends DefaultCrudRepository<
  ApplicanceMaster,
  typeof ApplicanceMaster.prototype.id,
  ApplicanceMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ApplicanceMaster, dataSource);
  }
}
