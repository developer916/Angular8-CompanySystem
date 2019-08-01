import { OnsceneRulesPocPage } from './app.po';

describe('onscene-rules-poc App', () => {
  let page: OnsceneRulesPocPage;

  beforeEach(() => {
    page = new OnsceneRulesPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
