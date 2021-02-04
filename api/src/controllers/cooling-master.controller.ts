import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CoolingMaster} from '../models';
import {CoolingMasterRepository} from '../repositories';

export class CoolingMasterController {
  constructor(
    @repository(CoolingMasterRepository)
    public coolingMasterRepository : CoolingMasterRepository,
  ) {}

  @post('/cooling-masters', {
    responses: {
      '200': {
        description: 'CoolingMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(CoolingMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoolingMaster, {
            title: 'NewCoolingMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    coolingMaster: Omit<CoolingMaster, 'id'>,
  ): Promise<CoolingMaster> {
    return this.coolingMasterRepository.create(coolingMaster);
  }

  @get('/cooling-masters/count', {
    responses: {
      '200': {
        description: 'CoolingMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CoolingMaster) where?: Where<CoolingMaster>,
  ): Promise<Count> {
    return this.coolingMasterRepository.count(where);
  }

  @get('/cooling-masters', {
    responses: {
      '200': {
        description: 'Array of CoolingMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CoolingMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CoolingMaster) filter?: Filter<CoolingMaster>,
  ): Promise<CoolingMaster[]> {
    return this.coolingMasterRepository.find(filter);
  }

  @patch('/cooling-masters', {
    responses: {
      '200': {
        description: 'CoolingMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoolingMaster, {partial: true}),
        },
      },
    })
    coolingMaster: CoolingMaster,
    @param.where(CoolingMaster) where?: Where<CoolingMaster>,
  ): Promise<Count> {
    return this.coolingMasterRepository.updateAll(coolingMaster, where);
  }

  @get('/cooling-masters/{id}', {
    responses: {
      '200': {
        description: 'CoolingMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CoolingMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CoolingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<CoolingMaster>
  ): Promise<CoolingMaster> {
    return this.coolingMasterRepository.findById(id, filter);
  }

  @patch('/cooling-masters/{id}', {
    responses: {
      '204': {
        description: 'CoolingMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CoolingMaster, {partial: true}),
        },
      },
    })
    coolingMaster: CoolingMaster,
  ): Promise<void> {
    await this.coolingMasterRepository.updateById(id, coolingMaster);
  }

  @put('/cooling-masters/{id}', {
    responses: {
      '204': {
        description: 'CoolingMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() coolingMaster: CoolingMaster,
  ): Promise<void> {
    await this.coolingMasterRepository.replaceById(id, coolingMaster);
  }

  @del('/cooling-masters/{id}', {
    responses: {
      '204': {
        description: 'CoolingMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.coolingMasterRepository.deleteById(id);
  }
}
