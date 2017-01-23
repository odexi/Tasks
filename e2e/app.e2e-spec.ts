import { Week2t1Page } from './app.po';

describe('week2t1 App', function() {
  let page: Week2t1Page;

  beforeEach(() => {
    page = new Week2t1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
