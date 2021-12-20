import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service'
import { FeedController } from './controllers/feed.controller';
import { FeedPostentity } from './models/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([FeedPostentity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
