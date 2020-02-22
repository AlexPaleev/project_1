import { IsNumber, IsString } from 'class-validator';

class CreateProjectDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsNumber()
  public pm_;
}

export default CreateProjectDto;