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
import {ApplicanceMaster} from '../models';
import {ApplicanceMasterRepository} from '../repositories';

export class ApplianceMasterController {
  constructor(
    @repository(ApplicanceMasterRepository)
    public applicanceMasterRepository : ApplicanceMasterRepository,
  ) {}

  @post('/applicance-masters', {
    responses: {
      '200': {
        description: 'ApplicanceMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(ApplicanceMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApplicanceMaster, {
            title: 'NewApplicanceMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    applicanceMaster: Omit<ApplicanceMaster, 'id'>,
  ): Promise<ApplicanceMaster> {
    return this.applicanceMasterRepository.create(applicanceMaster);
  }

  @get('/applicance-masters/count', {
    responses: {
      '200': {
        description: 'ApplicanceMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ApplicanceMaster) where?: Where<ApplicanceMaster>,
  ): Promise<Count> {
    return this.applicanceMasterRepository.count(where);
  }

  @get('/applicance-masters', {
    responses: {
      '200': {
        description: 'Array of ApplicanceMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ApplicanceMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ApplicanceMaster) filter?: Filter<ApplicanceMaster>,
  ): Promise<ApplicanceMaster[]> {
    return this.applicanceMasterRepository.find(filter);
  }

  @patch('/applicance-masters', {
    responses: {
      '200': {
        description: 'ApplicanceMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApplicanceMaster, {partial: true}),
        },
      },
    })
    applicanceMaster: ApplicanceMaster,
    @param.where(ApplicanceMaster) where?: Where<ApplicanceMaster>,
  ): Promise<Count> {
    return this.applicanceMasterRepository.updateAll(applicanceMaster, where);
  }

  @get('/applicance-masters/{id}', {
    responses: {
      '200': {
        description: 'ApplicanceMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ApplicanceMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ApplicanceMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ApplicanceMaster>
  ): Promise<ApplicanceMaster> {
    return this.applicanceMasterRepository.findById(id, filter);
  }

  @patch('/applicance-masters/{id}', {
    responses: {
      '204': {
        description: 'ApplicanceMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApplicanceMaster, {partial: true}),
        },
      },
    })
    applicanceMaster: ApplicanceMaster,
  ): Promise<void> {
    await this.applicanceMasterRepository.updateById(id, applicanceMaster);
  }

  @put('/applicance-masters/{id}', {
    responses: {
      '204': {
        description: 'ApplicanceMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() applicanceMaster: ApplicanceMaster,
  ): Promise<void> {
    await this.applicanceMasterRepository.replaceById(id, applicanceMaster);
  }

  @del('/applicance-masters/{id}', {
    responses: {
      '204': {
        description: 'ApplicanceMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.applicanceMasterRepository.deleteById(id);
  }
}
