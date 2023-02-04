const {ConvertAPI} =require('convertapi');
const convertapi = new ConvertAPI('Mk4e0Erb4bBGNceH', { conversionTimeout: 60 });
convertapi.convert('pdf', { File: '/home/saptarshi/Desktop/cv generator/Resumix-main/template/t/srt-resume.html',PdfResolution: '150' })
  .then(function(result) {
    // get converted file url
    console.log("Converted file url: " + result.file.url);

    // save to file
    return result.file.save('/home/saptarshi/Desktop/cv generator/Resumix-main/output.pdf');
  })
  .then(function(file) {
    console.log("File saved: " + file);
  })
  .catch(function(e) {
    console.error(e.toString());
  });
