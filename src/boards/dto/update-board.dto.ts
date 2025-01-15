import { IsNotEmpty } from "class-validator";

export class UpdateBoardDto {
    boardId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    contents: string;
}