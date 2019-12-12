import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { SavesModule } from './saves/saves.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EpisodesModule,
    UsersModule,
    PostsModule,
    SavesModule,
    PodcastsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
