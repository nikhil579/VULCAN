import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {FlooringMaster} from '../models';
import {FlooringMasterRepository} from '../repositories';

export class FlooringMasterController {
  constructor(
    @repository(FlooringMasterRepository)
    public flooringMasterRepository: FlooringMasterRepository,
  ) { }

  @post('/flooring-masters', {
    responses: {
      '200': {
        description: 'FlooringMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(FlooringMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlooringMaster, {
            title: 'NewFlooringMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    flooringMaster: Omit<FlooringMaster, 'id'>,
  ): Promise<FlooringMaster> {
    return this.flooringMasterRepository.create(flooringMaster);
  }

  @get('/flooring-masters/count', {
    responses: {
      '200': {
        description: 'FlooringMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FlooringMaster) where?: Where<FlooringMaster>,
  ): Promise<Count> {
    return this.flooringMasterRepository.count(where);
  }

  @get('/flooring-masters', {
    responses: {
      '200': {
        description: 'Array of FlooringMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FlooringMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FlooringMaster) filter?: Filter<FlooringMaster>,
  ): Promise<FlooringMaster[]> {
    return this.flooringMasterRepository.find(filter);
  }

  @patch('/flooring-masters', {
    responses: {
      '200': {
        description: 'FlooringMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlooringMaster, {partial: true}),
        },
      },
    })
    flooringMaster: FlooringMaster,
    @param.where(FlooringMaster) where?: Where<FlooringMaster>,
  ): Promise<Count> {
    return this.flooringMasterRepository.updateAll(flooringMaster, where);
  }

  @get('/flooring-masters/{id}', {
    responses: {
      '200': {
        description: 'FlooringMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FlooringMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FlooringMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FlooringMaster>
  ): Promise<FlooringMaster> {
    return this.flooringMasterRepository.findById(id, filter);
  }

  @patch('/flooring-masters/{id}', {
    responses: {
      '204': {
        description: 'FlooringMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlooringMaster, {partial: true}),
        },
      },
    })
    flooringMaster: FlooringMaster,
  ): Promise<void> {
    await this.flooringMasterRepository.updateById(id, flooringMaster);
  }

  @put('/flooring-masters/{id}', {
    responses: {
      '204': {
        description: 'FlooringMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() flooringMaster: FlooringMaster,
  ): Promise<void> {
    await this.flooringMasterRepository.replaceById(id, flooringMaster);
  }

  @del('/flooring-masters/{id}', {
    responses: {
      '204': {
        description: 'FlooringMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.flooringMasterRepository.deleteById(id);
  }
}
