import { TbKendoAngularPage } from './app.po';

describe('tb-kendo-angular App', () => {
  let page: TbKendoAngularPage;

  beforeEach(() => {
    page = new TbKendoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
