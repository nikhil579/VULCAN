import {DefaultCrudRepository} from '@loopback/repository';
import {OtherstructureMaster, OtherstructureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OtherstructureMasterRepository extends DefaultCrudRepository<
  OtherstructureMaster,
  typeof OtherstructureMaster.prototype.id,
  OtherstructureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(OtherstructureMaster, dataSource);
  }
}
