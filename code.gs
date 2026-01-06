const SHEET_ID = "11XLioRPi77xeficLpKhnrKN9uCTRHIuNS1bTSMmExhI";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('บันทึกการออกกำลังกาย');
}

function saveUserProfile(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Users') || ss.insertSheet('Users');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Name','Gender','Age','Weight']);
  }
  sheet.appendRow([
    new Date(),
    data.name,
    data.gender,
    data.age,
    data.weight
  ]);
  return true;
}

function saveActivity(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Activities') || ss.insertSheet('Activities');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Name','Activity','Minutes','Calories']);
  }
  sheet.appendRow([
    new Date(),
    data.name,
    data.activity,
    data.minutes,
    data.calories
  ]);
  return true;
}
