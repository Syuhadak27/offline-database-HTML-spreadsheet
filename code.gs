function doGet(e) {
  const sheetName = e.parameter.sheet || "database"; // nama sheet yg gunakan
  const range = e.parameter.range || "A2:E";        // range sheet yg akan di gunakan
  const ss = SpreadsheetApp.openById("ID SPREADSHEET");   // Id spreadsheet

  try {
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) throw new Error("Sheet tidak ditemukan: " + sheetName);

    const values = sheet.getRange(range).getValues();
    return ContentService.createTextOutput(JSON.stringify(values))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      error: true,
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
