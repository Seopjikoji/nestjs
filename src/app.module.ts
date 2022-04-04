import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { GlobalModule } from './global/global.module';
// import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [
    DomainModule, 
    InfraModule, 
    GlobalModule, 
    // ConfigurationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
