import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movice')
export class MoviceController {
  @Get()
  getAll(): string {
    return 'all';
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): string {
    return `hi ${movieId}`;
  }

  @Post()
  create(@Body() movieData: string): string {
    return `hi ${movieData}`;
  }

  @Delete(':id')
  remove(@Param('id') movieId: number): string {
    return `hi ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: object): string {
    return `hi ${movieId}`;
  }
}
