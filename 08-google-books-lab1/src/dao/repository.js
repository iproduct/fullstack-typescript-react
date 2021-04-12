export class MockRepository {
    entities = new Map();
    create(entity) {
        this.entities.set(entity.id,entity);
        return entity;
    }
    update(entity) {
        const old = this.entities.get(entity.id);
        if(!old) {
            throw Error(`Entity with ID='${entity.id}' does not exist.`);
        }
        this.entities.set(entity.id,entity);
        return entity;
    }
    findAll() {
        return Array.from(this.entities.values());
    }
    findById(id) {
        return this.entities.get(id);
    }
    deleteById(id) {
        const old = this.entities.get(id);
        this.entities.delete(id);
        return old;
    }
    count() {
        return this.entities.size;
    }
}
