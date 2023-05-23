import { Page } from './page.model';

describe('Page', () => {
  it('should create an instance', () => {
    expect(new Page("title", "url", "content")).toBeTruthy();
  });
});
