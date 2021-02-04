import {DefaultCrudRepository} from '@loopback/repository';
import {GasMaster, GasMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GasMasterRepository extends DefaultCrudRepository<
  GasMaster,
  typeof GasMaster.prototype.id,
  GasMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(GasMaster, dataSource);
  }
}
