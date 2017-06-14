import { Proj01Page } from './app.po';

describe('proj01 App', () => {
  let page: Proj01Page;

  beforeEach(() => {
    page = new Proj01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
