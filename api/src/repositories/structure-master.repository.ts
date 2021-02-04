import {DefaultCrudRepository} from '@loopback/repository';
import {StructureMaster, StructureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StructureMasterRepository extends DefaultCrudRepository<
  StructureMaster,
  typeof StructureMaster.prototype.id,
  StructureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(StructureMaster, dataSource);
  }
}
