import {IsString, IsEmpty, IsEmail, Length, IsAlphanumeric, Matches} from "class-validator";
export namespace AuthDTO{
    export class SignUp{
        //TODO : guard랑 JWT토큰 적용
        @IsEmpty({message: '사용자 ID는 공백일 수 없습니다.'})
        @IsAlphanumeric("en-US", {message:'사용자 ID는 영어와 숫자만 가능합니다.'})
        userId: string;

        @IsEmpty({message: '사용자 이름은 공백일 수 없습니다.'})
        @IsString({message: '사용자 이름은 문자만 가능합니다.'})
        @Length(2,10,{message:'사용자 이름은 최소 2글자에서 10글자 까지 가능합니다.'})
        userName: string;

        @IsEmpty({message: '사용자 email은 공백일 수 없습니다.'})
        @IsEmail()
        email:string;

        @IsEmpty({message: '사용자 비밀번호는 공백일 수 없습니다.'})
        @IsString({message: '사용자 비밀번호는 문자만 가능합니다.'})
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