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
import {GasMaster} from '../models';
import {GasMasterRepository} from '../repositories';

export class GasMasterController {
  constructor(
    @repository(GasMasterRepository)
    public gasMasterRepository : GasMasterRepository,
  ) {}

  @post('/gas-masters', {
    responses: {
      '200': {
        description: 'GasMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(GasMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GasMaster, {
            title: 'NewGasMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    gasMaster: Omit<GasMaster, 'id'>,
  ): Promise<GasMaster> {
    return this.gasMasterRepository.create(gasMaster);
  }

  @get('/gas-masters/count', {
    responses: {
      '200': {
        description: 'GasMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GasMaster) where?: Where<GasMaster>,
  ): Promise<Count> {
    return this.gasMasterRepository.count(where);
  }

  @get('/gas-masters', {
    responses: {
      '200': {
        description: 'Array of GasMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GasMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GasMaster) filter?: Filter<GasMaster>,
  ): Promise<GasMaster[]> {
    return this.gasMasterRepository.find(filter);
  }

  @patch('/gas-masters', {
    responses: {
      '200': {
        description: 'GasMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GasMaster, {partial: true}),
        },
      },
    })
    gasMaster: GasMaster,
    @param.where(GasMaster) where?: Where<GasMaster>,
  ): Promise<Count> {
    return this.gasMasterRepository.updateAll(gasMaster, where);
  }

  @get('/gas-masters/{id}', {
    responses: {
      '200': {
        description: 'GasMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GasMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GasMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<GasMaster>
  ): Promise<GasMaster> {
    return this.gasMasterRepository.findById(id, filter);
  }

  @patch('/gas-masters/{id}', {
    responses: {
      '204': {
        description: 'GasMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GasMaster, {partial: true}),
        },
      },
    })
    gasMaster: GasMaster,
  ): Promise<void> {
    await this.gasMasterRepository.updateById(id, gasMaster);
  }

  @put('/gas-masters/{id}', {
    responses: {
      '204': {
        description: 'GasMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gasMaster: GasMaster,
  ): Promise<void> {
    await this.gasMasterRepository.replaceById(id, gasMaster);
  }

  @del('/gas-masters/{id}', {
    responses: {
      '204': {
        description: 'GasMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gasMasterRepository.deleteById(id);
  }
}
