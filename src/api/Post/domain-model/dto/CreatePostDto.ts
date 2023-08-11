import { Post } from "../../repository/Post";

export interface CreatePostInput{
    title: string
    content: string
}
export class CreatePostDto{

    private title: string;


    private content: string;


    constructor(input:  CreatePostInput){
        this.title = input.title;
        this.content = input.content;
    }

    getInput():Post{
        return new  Post(this.title, this.content);
    }
}