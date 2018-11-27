import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderTitleComponent } from './header-title/header-title';
import { ListComponent } from './list/list';
import { BacktopComponent } from './backtop/backtop';
const components: any[] = [
	HeaderTitleComponent,
	ListComponent,
	BacktopComponent
]
@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		...components
	]
})
export class ComponentsModule {}
