import { NgModule } from '@angular/core';
import { ModaltitleDirective } from './modaltitle/modaltitle';
import { SxylightDirective } from './sxylight/sxylight';
@NgModule({
	declarations: [ModaltitleDirective,
    SxylightDirective],
	imports: [],
	exports: [ModaltitleDirective,
    SxylightDirective]
})
export class DirectivesModule {}
