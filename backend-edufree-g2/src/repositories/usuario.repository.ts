import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Perfil} from '../models';
import {PerfilRepository} from './perfil.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly perfils: HasManyRepositoryFactory<Perfil, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('PerfilRepository') protected perfilRepositoryGetter: Getter<PerfilRepository>,
  ) {
    super(Usuario, dataSource);
    this.perfils = this.createHasManyRepositoryFactoryFor('perfils', perfilRepositoryGetter,);
    this.registerInclusionResolver('perfils', this.perfils.inclusionResolver);
  }
}
