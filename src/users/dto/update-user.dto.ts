import { PartialType } from '@nestjs/mapped-types';
import { userDto } from './user.dto';

export class UpdateUserDto extends PartialType(userDto) {}
