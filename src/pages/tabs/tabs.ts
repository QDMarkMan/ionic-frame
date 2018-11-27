import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MessagePage } from './../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  HomeRoot = HomePage;
  AboutRoot = AboutPage;
  ContactRoot = ContactPage;
  MessageRoot = MessagePage
}
