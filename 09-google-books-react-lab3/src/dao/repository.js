export class Repository {
    entities = new Map();
    create(entity) {
        this.entities.set(entity.id, entity);
        return entity;
    }

    update(entity) {
        const old = this.entities.get(entity.id);
        if(!old){
            throw Error(`Entity with ID='${entity.id}' not found.`);
        }
        this.entities.set(entity.id, entity);
        return entity;
    }
    deleteById(id){
        const old = this.entities.get(id);
        if(!old){
            throw Error(`Entity with ID='${id}' not found.`);
        }
        this.entities.delete(id);
        return old;
    }
    findAll() {
        return Array.from(this.entities.values());
    }
    findById(id){
        return this.entities.get(id);
    }
    count() {
        return this.entities.size;
    }
}