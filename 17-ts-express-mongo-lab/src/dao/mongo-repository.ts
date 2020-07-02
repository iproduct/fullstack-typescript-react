import { Post } from '../model/post.model';
import { Indentifiable, IdType } from '../model/shared-types';
import { MongoClient } from 'mongodb';
import { Repository } from './repository';


export class MongoRepository<T extends Indentifiable> implements Repository<T> {
    constructor(public dbName: string, public collection: string, public mongoUrl: string) {}

    async init() {
         // connect to mongodb
         const con = await MongoClient.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = con.db(this.dbName);
    }

    add(entity: T): T {
        entity.id = this.getNextId();
        this.entities.set(entity.id, entity);
        return entity;
    }
    edit(entity: T): T {
        if (!entity.id) {
            throw Error(`Entity ID can not be undefined.`)
        }
        const found = this.findById(entity.id);
        if (!found) {
            throw Error(`Entity ID="${entity.id} does not exist and can not be modified.`)
        }
        this.entities.set(entity.id, entity);
        return entity;
    }
    deleteById(id: IdType): T | undefined {
        const found = this.findById(id);
        this.entities.delete(id);
        return found;
    }
    findAll(): T[] {
        return Array.from(this.entities.values());
    }
    findById(id: IdType): T | undefined {
        return this.entities.get(id);
    }

    getCount(): number {
        return this.entities.size;
    }

    // Implementation details
    private getNextId(): IdType {
        if (!MockRepository.nextId) {
            MockRepository.nextId = 0;
        }
        return ++MockRepository.nextId + '';
    }

}


export class PostRepository extends MockRepository<Post> {
}
