import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model()
export class Perfil extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'object',
    required: true,
  })
  Permisos: object;

  @property({
    type: 'string',
    required: true,
  })
  Modulos: string;

  @property({
    type: 'date',
  })
  FechaCreacion?: string;

  @belongsTo(() => Usuario)
  usuarioId: string;

  constructor(data?: Partial<Perfil>) {
    super(data);
  }
}

export interface PerfilRelations {
  // describe navigational properties here
}

export type PerfilWithRelations = Perfil & PerfilRelations;
