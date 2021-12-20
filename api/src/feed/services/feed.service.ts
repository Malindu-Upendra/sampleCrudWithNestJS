import {  Injectable } from '@nestjs/common';
import { FeedPostentity } from '../models/post.entity';
import { Repository, UpdateResult ,DeleteResult} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostentity)
        private readonly feedPostRepository: Repository<FeedPostentity>
    ){}

    createPost(feedPost:FeedPost): Observable<FeedPost>{
        return from(this.feedPostRepository.save(feedPost));
    }

    finAllPosts() : Observable<FeedPost[]>{
        return from(this.feedPostRepository.find())
    }

    updatePost(id: number,feedPost:FeedPost): Observable<UpdateResult>{
        return from(this.feedPostRepository.update(id,feedPost))
    }

    deletePost(id :number): Observable<DeleteResult>{
        return from(this.feedPostRepository.delete(id))
    }
}
