
export class Todo {
    
    constructor(id: number, title: string, details: string, createdAt: string, isDone: boolean) {
        this.id = id;
        this.title = title;
        this.details = details;
        this.createdAt = createdAt;
        this.isDone = isDone;
    }

    id: number;
    title: string;
    details: string;
    createdAt: string;
    isDone: boolean;
}