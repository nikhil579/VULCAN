import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingfeatureMaster, ParkingfeatureMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ParkingfeatureMasterRepository extends DefaultCrudRepository<
  ParkingfeatureMaster,
  typeof ParkingfeatureMaster.prototype.id,
  ParkingfeatureMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ParkingfeatureMaster, dataSource);
  }
}
