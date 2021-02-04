import {DefaultCrudRepository} from '@loopback/repository';
import {CommonwallMaster, CommonwallMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommonwallMasterRepository extends DefaultCrudRepository<
  CommonwallMaster,
  typeof CommonwallMaster.prototype.id,
  CommonwallMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(CommonwallMaster, dataSource);
  }
}
