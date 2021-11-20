import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Grupo, GrupoRelations, Usuario, UsuarioPorGrupo, Asignatura} from '../models';
import {UsuarioPorGrupoRepository} from './usuario-por-grupo.repository';
import {UsuarioRepository} from './usuario.repository';
import {AsignaturaRepository} from './asignatura.repository';

export class GrupoRepository extends DefaultCrudRepository<
  Grupo,
  typeof Grupo.prototype.id,
  GrupoRelations
> {

  public readonly usuariosgrupo: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.id,
          UsuarioPorGrupo,
          typeof Grupo.prototype.id
        >;

  public readonly asignatura: BelongsToAccessor<Asignatura, typeof Grupo.prototype.id>;

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.id,
          UsuarioPorGrupo,
          typeof Grupo.prototype.id
        >;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('UsuarioPorGrupoRepository') protected usuarioPorGrupoRepositoryGetter: Getter<UsuarioPorGrupoRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('AsignaturaRepository') protected asignaturaRepositoryGetter: Getter<AsignaturaRepository>,
  ) {
    super(Grupo, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, usuarioPorGrupoRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    this.asignatura = this.createBelongsToAccessorFor('asignatura', asignaturaRepositoryGetter,);
    this.registerInclusionResolver('asignatura', this.asignatura.inclusionResolver);
    this.usuariosgrupo = this.createHasManyThroughRepositoryFactoryFor('usuariosgrupo', usuarioRepositoryGetter, usuarioPorGrupoRepositoryGetter,);
    this.registerInclusionResolver('usuariosgrupo', this.usuariosgrupo.inclusionResolver);
  }
}
