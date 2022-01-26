
import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../models/class'

@EntityRepository(Class)
class ClassRepository extends Repository<Class> {

  public async findByName(name: string): Promise<Class[]> {
    return await this.find({
      where: {
        name,
      }
    })
  }
}

export default ClassRepository