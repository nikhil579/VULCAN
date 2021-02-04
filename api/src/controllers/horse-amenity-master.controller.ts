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
import {HorseamenityMaster} from '../models';
import {HorseamenityMasterRepository} from '../repositories';

export class HorseAmenityMasterController {
  constructor(
    @repository(HorseamenityMasterRepository)
    public horseamenityMasterRepository : HorseamenityMasterRepository,
  ) {}

  @post('/horseamenity-masters', {
    responses: {
      '200': {
        description: 'HorseamenityMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(HorseamenityMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HorseamenityMaster, {
            title: 'NewHorseamenityMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    horseamenityMaster: Omit<HorseamenityMaster, 'id'>,
  ): Promise<HorseamenityMaster> {
    return this.horseamenityMasterRepository.create(horseamenityMaster);
  }

  @get('/horseamenity-masters/count', {
    responses: {
      '200': {
        description: 'HorseamenityMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HorseamenityMaster) where?: Where<HorseamenityMaster>,
  ): Promise<Count> {
    return this.horseamenityMasterRepository.count(where);
  }

  @get('/horseamenity-masters', {
    responses: {
      '200': {
        description: 'Array of HorseamenityMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HorseamenityMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HorseamenityMaster) filter?: Filter<HorseamenityMaster>,
  ): Promise<HorseamenityMaster[]> {
    return this.horseamenityMasterRepository.find(filter);
  }

  @patch('/horseamenity-masters', {
    responses: {
      '200': {
        description: 'HorseamenityMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HorseamenityMaster, {partial: true}),
        },
      },
    })
    horseamenityMaster: HorseamenityMaster,
    @param.where(HorseamenityMaster) where?: Where<HorseamenityMaster>,
  ): Promise<Count> {
    return this.horseamenityMasterRepository.updateAll(horseamenityMaster, where);
  }

  @get('/horseamenity-masters/{id}', {
    responses: {
      '200': {
        description: 'HorseamenityMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HorseamenityMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HorseamenityMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<HorseamenityMaster>
  ): Promise<HorseamenityMaster> {
    return this.horseamenityMasterRepository.findById(id, filter);
  }

  @patch('/horseamenity-masters/{id}', {
    responses: {
      '204': {
        description: 'HorseamenityMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HorseamenityMaster, {partial: true}),
        },
      },
    })
    horseamenityMaster: HorseamenityMaster,
  ): Promise<void> {
    await this.horseamenityMasterRepository.updateById(id, horseamenityMaster);
  }

  @put('/horseamenity-masters/{id}', {
    responses: {
      '204': {
        description: 'HorseamenityMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() horseamenityMaster: HorseamenityMaster,
  ): Promise<void> {
    await this.horseamenityMasterRepository.replaceById(id, horseamenityMaster);
  }

  @del('/horseamenity-masters/{id}', {
    responses: {
      '204': {
        description: 'HorseamenityMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.horseamenityMasterRepository.deleteById(id);
  }
}
