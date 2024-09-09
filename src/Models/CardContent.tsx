import { ITagModel } from "./TagModel";

export interface ICardContent {
    Id: number;
    Title: string;
    SubTitle: string;
    EstimateTime: number;
    PercentageDone: number;
    PeopleResponsible: string[]
    Tags: ITagModel[];
}

export class CardContent implements ICardContent {
    Id: number = 0;
    Title: string = '';
    SubTitle: string = '';
    EstimateTime: number = 0;
    PercentageDone: number = 0;
    PeopleResponsible: string[] = [];
    Tags: ITagModel[] = [];

    constructor(id: number, title:string, subTitle: string, estimateTime: number, percentageDone: number, peopleResponsible: string[], tags: ITagModel[]) {
        this.Id = id;
        this.Title = title;
        this.SubTitle = subTitle;
        this.EstimateTime = estimateTime;
        this.PercentageDone = percentageDone;
        this.PeopleResponsible = peopleResponsible;
        this.Tags = tags;
    }

}