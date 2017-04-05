import { AtohPage } from './app.po';

describe('atoh App', () => {
  let page: AtohPage;

  beforeEach(() => {
    page = new AtohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
