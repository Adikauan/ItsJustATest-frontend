export interface ITagModel {
    Name: string;
    Color: string;

    
}

export class TagModel implements ITagModel {
    Name: string;
    Color: string;
    
    constructor(name: string, color: string){
        this.Name = name;
        this.Color = color;
    }
}