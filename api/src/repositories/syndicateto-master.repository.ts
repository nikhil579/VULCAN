import {DefaultCrudRepository} from '@loopback/repository';
import {SyndicatetoMaster, SyndicatetoMasterRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SyndicatetoMasterRepository extends DefaultCrudRepository<
  SyndicatetoMaster,
  typeof SyndicatetoMaster.prototype.id,
  SyndicatetoMasterRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(SyndicatetoMaster, dataSource);
  }
}
