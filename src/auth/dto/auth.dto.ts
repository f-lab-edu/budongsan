import { IsEmpty, IsString, IsEmail, Length, IsAlphanumeric, Matches} from "class-validator";
export namespace AuthDTO{
    export class SignUp{
        //TODO : guard랑 JWT토큰 적용
        @IsEmpty()
        @IsAlphanumeric()
        userId: string;

        @IsEmpty()
        @IsString()
        @Length(2,10)
        userName: string;

        @IsEmpty()
        @IsEmail()
        email:string;

        @IsEmpty()
        @IsString()
        @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/, {
            message:
                '패스워드는 8~20자리이며 최소 하나 이상의 영문자, 최소 하나 이상의 숫자, 최소 하나 이상의 특수문자를 입력해야 합니다.',
        })
        password: string;
    }

    export class SignIn{
        @IsAlphanumeric()
        @Length(4, 20)
        userId: string;

        @IsString()
        @Length(8, 20)
        password: string;
    }
}