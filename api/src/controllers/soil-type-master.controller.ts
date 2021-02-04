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
import {SoiltypeMaster} from '../models';
import {SoiltypeMasterRepository} from '../repositories';

export class SoilTypeMasterController {
  constructor(
    @repository(SoiltypeMasterRepository)
    public soiltypeMasterRepository : SoiltypeMasterRepository,
  ) {}

  @post('/soiltype-masters', {
    responses: {
      '200': {
        description: 'SoiltypeMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(SoiltypeMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SoiltypeMaster, {
            title: 'NewSoiltypeMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    soiltypeMaster: Omit<SoiltypeMaster, 'id'>,
  ): Promise<SoiltypeMaster> {
    return this.soiltypeMasterRepository.create(soiltypeMaster);
  }

  @get('/soiltype-masters/count', {
    responses: {
      '200': {
        description: 'SoiltypeMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SoiltypeMaster) where?: Where<SoiltypeMaster>,
  ): Promise<Count> {
    return this.soiltypeMasterRepository.count(where);
  }

  @get('/soiltype-masters', {
    responses: {
      '200': {
        description: 'Array of SoiltypeMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SoiltypeMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SoiltypeMaster) filter?: Filter<SoiltypeMaster>,
  ): Promise<SoiltypeMaster[]> {
    return this.soiltypeMasterRepository.find(filter);
  }

  @patch('/soiltype-masters', {
    responses: {
      '200': {
        description: 'SoiltypeMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SoiltypeMaster, {partial: true}),
        },
      },
    })
    soiltypeMaster: SoiltypeMaster,
    @param.where(SoiltypeMaster) where?: Where<SoiltypeMaster>,
  ): Promise<Count> {
    return this.soiltypeMasterRepository.updateAll(soiltypeMaster, where);
  }

  @get('/soiltype-masters/{id}', {
    responses: {
      '200': {
        description: 'SoiltypeMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SoiltypeMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SoiltypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<SoiltypeMaster>
  ): Promise<SoiltypeMaster> {
    return this.soiltypeMasterRepository.findById(id, filter);
  }

  @patch('/soiltype-masters/{id}', {
    responses: {
      '204': {
        description: 'SoiltypeMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SoiltypeMaster, {partial: true}),
        },
      },
    })
    soiltypeMaster: SoiltypeMaster,
  ): Promise<void> {
    await this.soiltypeMasterRepository.updateById(id, soiltypeMaster);
  }

  @put('/soiltype-masters/{id}', {
    responses: {
      '204': {
        description: 'SoiltypeMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() soiltypeMaster: SoiltypeMaster,
  ): Promise<void> {
    await this.soiltypeMasterRepository.replaceById(id, soiltypeMaster);
  }

  @del('/soiltype-masters/{id}', {
    responses: {
      '204': {
        description: 'SoiltypeMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.soiltypeMasterRepository.deleteById(id);
  }
}
