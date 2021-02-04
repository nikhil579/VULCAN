import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {FlooringMaster, FlooringMasterRelations} from '../models';

export class FlooringMasterRepository extends DefaultCrudRepository<
  FlooringMaster,
  typeof FlooringMaster.prototype.id,
  FlooringMasterRelations
  > {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(FlooringMaster, dataSource);
  }
}
