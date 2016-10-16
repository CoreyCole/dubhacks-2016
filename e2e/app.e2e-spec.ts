import { Dubhacks2016Page } from './app.po';

describe('dubhacks-2016 App', function() {
  let page: Dubhacks2016Page;

  beforeEach(() => {
    page = new Dubhacks2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
