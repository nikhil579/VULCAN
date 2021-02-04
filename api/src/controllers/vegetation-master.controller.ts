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
import {VegetationMaster} from '../models';
import {VegetationMasterRepository} from '../repositories';

export class VegetationMasterController {
  constructor(
    @repository(VegetationMasterRepository)
    public vegetationMasterRepository : VegetationMasterRepository,
  ) {}

  @post('/vegetation-masters', {
    responses: {
      '200': {
        description: 'VegetationMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(VegetationMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VegetationMaster, {
            title: 'NewVegetationMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    vegetationMaster: Omit<VegetationMaster, 'id'>,
  ): Promise<VegetationMaster> {
    return this.vegetationMasterRepository.create(vegetationMaster);
  }

  @get('/vegetation-masters/count', {
    responses: {
      '200': {
        description: 'VegetationMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VegetationMaster) where?: Where<VegetationMaster>,
  ): Promise<Count> {
    return this.vegetationMasterRepository.count(where);
  }

  @get('/vegetation-masters', {
    responses: {
      '200': {
        description: 'Array of VegetationMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VegetationMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VegetationMaster) filter?: Filter<VegetationMaster>,
  ): Promise<VegetationMaster[]> {
    return this.vegetationMasterRepository.find(filter);
  }

  @patch('/vegetation-masters', {
    responses: {
      '200': {
        description: 'VegetationMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VegetationMaster, {partial: true}),
        },
      },
    })
    vegetationMaster: VegetationMaster,
    @param.where(VegetationMaster) where?: Where<VegetationMaster>,
  ): Promise<Count> {
    return this.vegetationMasterRepository.updateAll(vegetationMaster, where);
  }

  @get('/vegetation-masters/{id}', {
    responses: {
      '200': {
        description: 'VegetationMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VegetationMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VegetationMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<VegetationMaster>
  ): Promise<VegetationMaster> {
    return this.vegetationMasterRepository.findById(id, filter);
  }

  @patch('/vegetation-masters/{id}', {
    responses: {
      '204': {
        description: 'VegetationMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VegetationMaster, {partial: true}),
        },
      },
    })
    vegetationMaster: VegetationMaster,
  ): Promise<void> {
    await this.vegetationMasterRepository.updateById(id, vegetationMaster);
  }

  @put('/vegetation-masters/{id}', {
    responses: {
      '204': {
        description: 'VegetationMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vegetationMaster: VegetationMaster,
  ): Promise<void> {
    await this.vegetationMasterRepository.replaceById(id, vegetationMaster);
  }

  @del('/vegetation-masters/{id}', {
    responses: {
      '204': {
        description: 'VegetationMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vegetationMasterRepository.deleteById(id);
  }
}
