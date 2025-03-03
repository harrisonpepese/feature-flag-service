import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureFlagModule } from './feature-flag/feature-flag.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [FeatureFlagModule, UserModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
