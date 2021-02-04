import {DefaultCrudRepository} from '@loopback/repository';
import {BusinessMaster, BusinessMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BusinessMasterRepository extends DefaultCrudRepository<
  BusinessMaster,
  typeof BusinessMaster.prototype.id,
  BusinessMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(BusinessMaster, dataSource);
  }
}
