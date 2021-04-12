import {MockRepository} from '../dao/repository';

class BookService{
    repo = new MockRepository();
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        
    }
}