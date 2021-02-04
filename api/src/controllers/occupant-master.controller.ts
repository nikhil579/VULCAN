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
import {OccupantMaster} from '../models';
import {OccupantMasterRepository} from '../repositories';

export class OccupantMasterController {
  constructor(
    @repository(OccupantMasterRepository)
    public occupantMasterRepository : OccupantMasterRepository,
  ) {}

  @post('/occupant-masters', {
    responses: {
      '200': {
        description: 'OccupantMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(OccupantMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupantMaster, {
            title: 'NewOccupantMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    occupantMaster: Omit<OccupantMaster, 'id'>,
  ): Promise<OccupantMaster> {
    return this.occupantMasterRepository.create(occupantMaster);
  }

  @get('/occupant-masters/count', {
    responses: {
      '200': {
        description: 'OccupantMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OccupantMaster) where?: Where<OccupantMaster>,
  ): Promise<Count> {
    return this.occupantMasterRepository.count(where);
  }

  @get('/occupant-masters', {
    responses: {
      '200': {
        description: 'Array of OccupantMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OccupantMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OccupantMaster) filter?: Filter<OccupantMaster>,
  ): Promise<OccupantMaster[]> {
    return this.occupantMasterRepository.find(filter);
  }

  @patch('/occupant-masters', {
    responses: {
      '200': {
        description: 'OccupantMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupantMaster, {partial: true}),
        },
      },
    })
    occupantMaster: OccupantMaster,
    @param.where(OccupantMaster) where?: Where<OccupantMaster>,
  ): Promise<Count> {
    return this.occupantMasterRepository.updateAll(occupantMaster, where);
  }

  @get('/occupant-masters/{id}', {
    responses: {
      '200': {
        description: 'OccupantMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OccupantMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OccupantMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OccupantMaster>
  ): Promise<OccupantMaster> {
    return this.occupantMasterRepository.findById(id, filter);
  }

  @patch('/occupant-masters/{id}', {
    responses: {
      '204': {
        description: 'OccupantMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupantMaster, {partial: true}),
        },
      },
    })
    occupantMaster: OccupantMaster,
  ): Promise<void> {
    await this.occupantMasterRepository.updateById(id, occupantMaster);
  }

  @put('/occupant-masters/{id}', {
    responses: {
      '204': {
        description: 'OccupantMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() occupantMaster: OccupantMaster,
  ): Promise<void> {
    await this.occupantMasterRepository.replaceById(id, occupantMaster);
  }

  @del('/occupant-masters/{id}', {
    responses: {
      '204': {
        description: 'OccupantMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.occupantMasterRepository.deleteById(id);
  }
}
