import { Injectable } from '@nestjs/common';
import { createBasureroDto } from './dto/create-basurero.dto';
import { UpdateBasureroDto } from './dto/update-basurero.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasurerosService {
  constructor(private prisma: PrismaService){}
  create(createBasureroDto: createBasureroDto) {
    return this.prisma.basurero.create({ data: createBasureroDto});
  }

  findAll() {
    return this.prisma.basurero.findMany({ });
  }

  findOne(id: number) {
    return this.prisma.basurero.findUnique({ where: {id}});
  }

  update(id: number, updateBasureroDto: UpdateBasureroDto) {
    return `This action updates a #${id} basurero`;
  }

  remove(id: number) {
    return `This action removes a #${id} basurero`;
  }
}
