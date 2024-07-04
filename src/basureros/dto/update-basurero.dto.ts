import { PartialType } from '@nestjs/swagger';
import { CreateBasureroDto } from './create-basurero.dto';

export class UpdateBasureroDto extends PartialType(CreateBasureroDto) {}
