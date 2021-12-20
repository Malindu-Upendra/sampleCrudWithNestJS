import { Body, Controller,Delete,Get,Param,Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';
import { UpdateResult ,DeleteResult} from 'typeorm'

@Controller('feed')
export class FeedController {
    constructor(private FeedService: FeedService){} 

    @Post()
    create(@Body() post:FeedPost): Observable<FeedPost>{
        return this.FeedService.createPost(post)
    }

    @Get()
    getAllPosts(): Observable<FeedPost[]>{
        return this.FeedService.finAllPosts();
    }

    @Put(':id')
    updatePost(
        @Param('id') id: number,
        @Body() feedPost:FeedPost
    ): Observable<UpdateResult>{
        return this.FeedService.updatePost(id, feedPost)
    }

    @Delete(':id')
    deletePost(
        @Param('id') id:number,
    ): Observable<DeleteResult>{
        return this.FeedService.deletePost(id)
    }

}
