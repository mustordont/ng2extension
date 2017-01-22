import { Ng2ExtensionPage } from './app.po';

describe('ng2-extension App', function() {
  let page: Ng2ExtensionPage;

  beforeEach(() => {
    page = new Ng2ExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
