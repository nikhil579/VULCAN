import {DefaultCrudRepository} from '@loopback/repository';
import {ListingtermMaster, ListingtermMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ListingtermMasterRepository extends DefaultCrudRepository<
  ListingtermMaster,
  typeof ListingtermMaster.prototype.id,
  ListingtermMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ListingtermMaster, dataSource);
  }
}
