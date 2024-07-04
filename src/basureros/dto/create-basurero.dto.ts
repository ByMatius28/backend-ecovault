
import { ApiProperty } from "@nestjs/swagger";
export class createBasureroDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    location: string;
    @ApiProperty()
    incharge: string;
    @ApiProperty()
    capacity: string;
}

