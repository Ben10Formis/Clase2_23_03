import { Lab4Clase02AngularPage } from './app.po';

describe('lab4-clase02-angular App', function() {
  let page: Lab4Clase02AngularPage;

  beforeEach(() => {
    page = new Lab4Clase02AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
