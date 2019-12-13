import { Module } from '@nestjs/common';
// import { EpisodesModule } from './episodes/episodes.module';
import { UsersModule } from './users/users.module';
// import { PostsModule } from './posts/posts.module';
// import { SavesModule } from './saves/saves.module';
// import { PodcastsModule } from './podcasts/podcasts.module';
import { AuthModule } from './auth/auth.module';
import { ApiController } from './api.controller';

@Module({
  imports: [
    // EpisodesModule,
    UsersModule,
    // PostsModule,
    // SavesModule,
    // PodcastsModule,
    AuthModule,
  ],
  controllers: [ApiController],
})
export class ApiModule {}