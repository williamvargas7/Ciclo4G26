import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Asignatura} from './asignatura.model';
import {UsuarioPorGrupo} from './usuario-por-grupo.model';

@model()
export class Grupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Codigo: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Capacidad: number;

  @property({
    type: 'string',
    required: true,
  })
  IdPrograma: string;

  @property({
    type: 'string',
    required: true,
  })
  IdDocente: string;

  @belongsTo(() => Asignatura)
  asignaturaId: string;

  @hasMany(() => Usuario, {through: {model: () => UsuarioPorGrupo}})
  usuarios: Usuario[];

  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GruposWithRelations = Grupo & GrupoRelations;
