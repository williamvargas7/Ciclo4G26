import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioPorGrupo extends Entity {
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
  GrupoId: string;

  @property({
    type: 'string',
    required: true,
  })
  UsuarioId: string;

  @property({
    type: 'number',
    required: true,
  })
  Calificacion: number;

  @property({
    type: 'string',
  })
  grupoId?: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  constructor(data?: Partial<UsuarioPorGrupo>) {
    super(data);
  }
}

export interface UsuarioPorGrupoRelations {
  // describe navigational properties here
}

export type UsuarioPorGrupoWithRelations = UsuarioPorGrupo & UsuarioPorGrupoRelations;
