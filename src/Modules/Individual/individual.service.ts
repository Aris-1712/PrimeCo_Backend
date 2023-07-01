import { InjectRepository } from '@nestjs/typeorm';
import { Individual, Individual_Type } from 'src/Models/individual.entity';
import { Repository } from 'typeorm';
import { IndividualDto } from './dtos/individual.dto';

export class IndividualServie {
  constructor(
    @InjectRepository(Individual)
    private individualRepo: Repository<Individual>,
  ) {}
  async addIndividual(data: IndividualDto) {
    const driver = await this.individualRepo.create(data);
    return await this.individualRepo.save(driver);
  }

  async getIndividual(type:Individual_Type) {
    return await this.individualRepo.find({
      where: { type },
    });
  }
}
