import { NgModule } from '@angular/core';
import { SocialLoginComponent } from './social-login/social-login';
import { HeaderLogoComponent } from './header-logo/header-logo';
@NgModule({
	declarations: [SocialLoginComponent,
    HeaderLogoComponent],
	imports: [],
	exports: [SocialLoginComponent,
    HeaderLogoComponent]

})
export class ComponentsModule {}
