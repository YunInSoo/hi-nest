import { Module } from '@nestjs/common';
import { MoviceController } from './movice/movice.controller';
import { MoviceService } from './movice/movice.service';

@Module({
  imports: [],
  controllers: [MoviceController],
  providers: [MoviceService],
})
export class AppModule {}
