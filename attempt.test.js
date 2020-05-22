const attempt = require('./index');


describe("Test attempt function", () => {

  test("test 1", () => {
    const avaible = [240, 360, 720];
    const allowed = [360, 720];
    const preffered = [1080];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([360]);
  });

  test("test 2", () => {
    const avaible = [240, 720];
    const allowed = [360, 720];
    const preffered = [1080];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([720]);
  });

  test("test 3", () => {
    const avaible = [240];
    const allowed = [360, 720];
    const preffered = [1080];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([]);
  });

  test("test 4", () => {
    const avaible = [240, 360, 720];
    const allowed = [240, 360, 720, 1080];
    const preffered = [240, 360];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([240, 360]);
  });

  test("test 5", () => {
    const avaible = [240, 720];
    const allowed = [240, 360, 720, 1080];
    const preffered = [240, 360];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([240, 720]);
  });

  test("test 6", () => {
    const avaible = [240, 720];
    const allowed = [240, 360, 1080];
    const preffered = [240, 360];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([240]);
  });

  test("test 7", () => {
    const avaible = [720];
    const allowed = [240, 360, 1080];
    const preffered = [240, 360];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([]);
  });

  test("test 8", () => {
    const avaible = [240, 360];
    const allowed = [240, 360];
    const preffered = [720, 1080];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([360]);
  });

  test("test 9", () => {
    const avaible = [240, 360, 720];
    const allowed = [360, 'any'];
    const preffered = [360, 720];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([360, 720]);
  });


  test("test 10", () => {
    const avaible = [240, 360, 720];
    const allowed = [240, 360, 720];
    const preffered = ['any', 720];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([240, 360, 720]);
  });

  test("test 11", () => {
    const avaible = [240, 360, 720];
    const allowed = [360, 1080];
    const preffered = ['any', 720];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([360]);
  });

  test("test 12", () => {
    const avaible = [240, 360, 720];
    const allowed = [1080];
    const preffered = ['any', 720];

    const result = attempt(avaible, allowed, preffered);
    expect(result).toEqual([]);
  });
});