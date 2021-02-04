import {DefaultCrudRepository} from '@loopback/repository';
import {TenantpaysMaster, TenantpaysMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TenantpaysMasterRepository extends DefaultCrudRepository<
  TenantpaysMaster,
  typeof TenantpaysMaster.prototype.id,
  TenantpaysMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(TenantpaysMaster, dataSource);
  }
}
