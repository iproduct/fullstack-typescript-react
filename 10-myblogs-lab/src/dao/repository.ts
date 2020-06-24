import { Post } from '../model/post.model';
import { IdType, Indentifiable } from '../shared/shared-types.js';

export interface Repository<T extends Indentifiable> {
    add(user: T): T;
    edit(user: T): T;
    deleteById(id: IdType): T | undefined;
    findAll(): T[];
    findById(id: IdType): T | undefined;
    getCount(): number;
}

export class MockRepository<T extends Indentifiable> implements Repository<T> {
    static nextId : number;
    private entities = new Map<IdType, T>();
    add(entity: T): T {
        entity.id = this.getNextId();
        this.entities.set(entity.id, entity);
        return entity;
    }
    edit(entity: T): T {
        if(!entity.id) {
            throw Error(`Entity ID can not be undefined.`)
        }
        const found = this.findById(entity.id);
        if(!found) {
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
        if(!MockRepository.nextId) {
            MockRepository.nextId = 0;
        }
        return ++MockRepository.nextId + '';
    }
    
}

export class PostRepository extends MockRepository<Post> {
}
