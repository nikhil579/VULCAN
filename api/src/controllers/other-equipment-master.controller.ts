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
import {OtherequipmentMaster} from '../models';
import {OtherequipmentMasterRepository} from '../repositories';

export class OtherEquipmentMasterController {
  constructor(
    @repository(OtherequipmentMasterRepository)
    public otherequipmentMasterRepository : OtherequipmentMasterRepository,
  ) {}

  @post('/otherequipment-masters', {
    responses: {
      '200': {
        description: 'OtherequipmentMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(OtherequipmentMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherequipmentMaster, {
            title: 'NewOtherequipmentMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    otherequipmentMaster: Omit<OtherequipmentMaster, 'id'>,
  ): Promise<OtherequipmentMaster> {
    return this.otherequipmentMasterRepository.create(otherequipmentMaster);
  }

  @get('/otherequipment-masters/count', {
    responses: {
      '200': {
        description: 'OtherequipmentMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OtherequipmentMaster) where?: Where<OtherequipmentMaster>,
  ): Promise<Count> {
    return this.otherequipmentMasterRepository.count(where);
  }

  @get('/otherequipment-masters', {
    responses: {
      '200': {
        description: 'Array of OtherequipmentMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OtherequipmentMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OtherequipmentMaster) filter?: Filter<OtherequipmentMaster>,
  ): Promise<OtherequipmentMaster[]> {
    return this.otherequipmentMasterRepository.find(filter);
  }

  @patch('/otherequipment-masters', {
    responses: {
      '200': {
        description: 'OtherequipmentMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherequipmentMaster, {partial: true}),
        },
      },
    })
    otherequipmentMaster: OtherequipmentMaster,
    @param.where(OtherequipmentMaster) where?: Where<OtherequipmentMaster>,
  ): Promise<Count> {
    return this.otherequipmentMasterRepository.updateAll(otherequipmentMaster, where);
  }

  @get('/otherequipment-masters/{id}', {
    responses: {
      '200': {
        description: 'OtherequipmentMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OtherequipmentMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OtherequipmentMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OtherequipmentMaster>
  ): Promise<OtherequipmentMaster> {
    return this.otherequipmentMasterRepository.findById(id, filter);
  }

  @patch('/otherequipment-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherequipmentMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherequipmentMaster, {partial: true}),
        },
      },
    })
    otherequipmentMaster: OtherequipmentMaster,
  ): Promise<void> {
    await this.otherequipmentMasterRepository.updateById(id, otherequipmentMaster);
  }

  @put('/otherequipment-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherequipmentMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() otherequipmentMaster: OtherequipmentMaster,
  ): Promise<void> {
    await this.otherequipmentMasterRepository.replaceById(id, otherequipmentMaster);
  }

  @del('/otherequipment-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherequipmentMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.otherequipmentMasterRepository.deleteById(id);
  }
}
