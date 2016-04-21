import expect from 'expect';

describe('Check that App is loaded', () => {
  it('#application exists in DOM', () => {
    expect(document.getElementById('application')).toBeTruthy;
    expect(document.getElementById('IAmNotAValidId')).toNotBeTruthy;
  });
});
