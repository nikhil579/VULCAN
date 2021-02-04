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
import {RoofMaster} from '../models';
import {RoofMasterRepository} from '../repositories';

export class RoofMasterController {
  constructor(
    @repository(RoofMasterRepository)
    public roofMasterRepository : RoofMasterRepository,
  ) {}

  @post('/roof-masters', {
    responses: {
      '200': {
        description: 'RoofMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(RoofMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoofMaster, {
            title: 'NewRoofMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    roofMaster: Omit<RoofMaster, 'id'>,
  ): Promise<RoofMaster> {
    return this.roofMasterRepository.create(roofMaster);
  }

  @get('/roof-masters/count', {
    responses: {
      '200': {
        description: 'RoofMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(RoofMaster) where?: Where<RoofMaster>,
  ): Promise<Count> {
    return this.roofMasterRepository.count(where);
  }

  @get('/roof-masters', {
    responses: {
      '200': {
        description: 'Array of RoofMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RoofMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(RoofMaster) filter?: Filter<RoofMaster>,
  ): Promise<RoofMaster[]> {
    return this.roofMasterRepository.find(filter);
  }

  @patch('/roof-masters', {
    responses: {
      '200': {
        description: 'RoofMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoofMaster, {partial: true}),
        },
      },
    })
    roofMaster: RoofMaster,
    @param.where(RoofMaster) where?: Where<RoofMaster>,
  ): Promise<Count> {
    return this.roofMasterRepository.updateAll(roofMaster, where);
  }

  @get('/roof-masters/{id}', {
    responses: {
      '200': {
        description: 'RoofMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RoofMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RoofMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<RoofMaster>
  ): Promise<RoofMaster> {
    return this.roofMasterRepository.findById(id, filter);
  }

  @patch('/roof-masters/{id}', {
    responses: {
      '204': {
        description: 'RoofMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoofMaster, {partial: true}),
        },
      },
    })
    roofMaster: RoofMaster,
  ): Promise<void> {
    await this.roofMasterRepository.updateById(id, roofMaster);
  }

  @put('/roof-masters/{id}', {
    responses: {
      '204': {
        description: 'RoofMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() roofMaster: RoofMaster,
  ): Promise<void> {
    await this.roofMasterRepository.replaceById(id, roofMaster);
  }

  @del('/roof-masters/{id}', {
    responses: {
      '204': {
        description: 'RoofMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.roofMasterRepository.deleteById(id);
  }
}
