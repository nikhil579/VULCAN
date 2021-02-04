import {DefaultCrudRepository} from '@loopback/repository';
import {VegetationMaster, VegetationMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VegetationMasterRepository extends DefaultCrudRepository<
  VegetationMaster,
  typeof VegetationMaster.prototype.id,
  VegetationMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(VegetationMaster, dataSource);
  }
}
