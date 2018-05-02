import { SDNNEWPage } from './app.po';

describe('sdn-new App', function() {
  let page: SDNNEWPage;

  beforeEach(() => {
    page = new SDNNEWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
