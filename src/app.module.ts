import { Module } from '@nestjs/common';
import { MoviceController } from './movice/movice.controller';
import { MovieService } from './movice/movie.service';

@Module({
  imports: [],
  controllers: [MoviceController],
  providers: [MovieService],
})
export class AppModule {}
