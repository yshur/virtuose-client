import { VirtuoseClientPage } from './app.po';

describe('virtuose-client App', () => {
  let page: VirtuoseClientPage;

  beforeEach(() => {
    page = new VirtuoseClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
