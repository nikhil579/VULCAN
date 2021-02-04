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
import {WatersourceMaster} from '../models';
import {WatersourceMasterRepository} from '../repositories';

export class WaterSourceMasterController {
  constructor(
    @repository(WatersourceMasterRepository)
    public watersourceMasterRepository : WatersourceMasterRepository,
  ) {}

  @post('/watersource-masters', {
    responses: {
      '200': {
        description: 'WatersourceMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(WatersourceMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WatersourceMaster, {
            title: 'NewWatersourceMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    watersourceMaster: Omit<WatersourceMaster, 'id'>,
  ): Promise<WatersourceMaster> {
    return this.watersourceMasterRepository.create(watersourceMaster);
  }

  @get('/watersource-masters/count', {
    responses: {
      '200': {
        description: 'WatersourceMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(WatersourceMaster) where?: Where<WatersourceMaster>,
  ): Promise<Count> {
    return this.watersourceMasterRepository.count(where);
  }

  @get('/watersource-masters', {
    responses: {
      '200': {
        description: 'Array of WatersourceMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WatersourceMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WatersourceMaster) filter?: Filter<WatersourceMaster>,
  ): Promise<WatersourceMaster[]> {
    return this.watersourceMasterRepository.find(filter);
  }

  @patch('/watersource-masters', {
    responses: {
      '200': {
        description: 'WatersourceMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WatersourceMaster, {partial: true}),
        },
      },
    })
    watersourceMaster: WatersourceMaster,
    @param.where(WatersourceMaster) where?: Where<WatersourceMaster>,
  ): Promise<Count> {
    return this.watersourceMasterRepository.updateAll(watersourceMaster, where);
  }

  @get('/watersource-masters/{id}', {
    responses: {
      '200': {
        description: 'WatersourceMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WatersourceMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WatersourceMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<WatersourceMaster>
  ): Promise<WatersourceMaster> {
    return this.watersourceMasterRepository.findById(id, filter);
  }

  @patch('/watersource-masters/{id}', {
    responses: {
      '204': {
        description: 'WatersourceMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WatersourceMaster, {partial: true}),
        },
      },
    })
    watersourceMaster: WatersourceMaster,
  ): Promise<void> {
    await this.watersourceMasterRepository.updateById(id, watersourceMaster);
  }

  @put('/watersource-masters/{id}', {
    responses: {
      '204': {
        description: 'WatersourceMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() watersourceMaster: WatersourceMaster,
  ): Promise<void> {
    await this.watersourceMasterRepository.replaceById(id, watersourceMaster);
  }

  @del('/watersource-masters/{id}', {
    responses: {
      '204': {
        description: 'WatersourceMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.watersourceMasterRepository.deleteById(id);
  }
}
