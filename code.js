// @ts-nocheck
var sheet = SpreadsheetApp.getActiveSheet();    // การทำให้ sheet เปิดใช้งาน
var data = sheet.getDataRange().getValues();    // การดึงค่าจากช่วงข้อมูลทั้งหมด
var date = data[0][12];                          // การระบุช่วงข้อมูลที่ต้องการ แถวนอน 1+1 แถวตั้ง 9+1
var SEND = 'SEND';                              // กำหนดตัวแปร ว่าเป็นข้อความนี้

function report() {                             // ชื่อฟังก์ชั่น report

    for (var i=1;i<data.length;++i){            // กำหนดให่วนหาข้อมูล(loop) เริ่มที่ 1 จำนวนรอบถึงจำนวนช่วงข้อมูลให้หยุด โดยบวกไปเรื่อยๆทีละ 1
      var row = data[i];                        // กำหนดช่วงข้อมูลวน loop เริ่มจาก i=1ค่าที่ได้เป็นแถวใน[1] คือแถวนอนที่ 1+1 = 2 โดยบวกไปเรื่อยๆทีละ 1
      var Sent = row[10];                        // กำหนดค่าตัวแปรจากรอบแรก(แถวนอน 2) ในตำแหน่งแถวตั้งที่ 7+1 = 8 โดยบวกไปเรื่อยๆทีละ 1 ในแถวนอน
      var mes1 = row[0];                            // รอบที่ 2 จะเป็น แถวนอน 3 แถวตั้ง 8 ลงไปเรื่อยๆ
      var mes2 = row[1];
      var mes3 = row[2];
      var mes4 = row[3];
      var mes5 = row[4];
      var mes6 = row[5];
      var mes7 = row[6];
 

      all = '      ' + ' 📣   ' + mes7 + '    📣 ' + '\n' + '\n' + '📌 ' + 'เรื่อง : ' + mes2 + '\n' + '\n' + '👉 ' + 'รายละเอียด : ' + mes3 +  '\n' + '\n' + '📍 ' + 'รายละเอียดเพิ่มเติม :  ' + mes6 + '\n' + '\n' + 'ด้วยความเคารพ' +  '\n' + mes4  ; 

      if(Sent != SEND){                // ตั้งเงื่อนไขว่าถ้าแถวตั้งที่ 7+1 ไม่เท่ากับข้อความ SEND ให้ดำเนินการต่อไปนี้ คือเอา all มาวนรับค่าข้อมูลไปแต่ละรอบ และได้ค่าอะไรมา ให้บวกเข้าไปในตัวเองเรื่อยๆ ต่อๆกันเป็นข้อความเดียว 

      sheet.getRange(i+1,11).setValue(SEND);     // รอบแรกให้เติมคำว่า SEND เข้าไปใน แถวนอนที่ 1+1 แถวตั้งที่ 8 เพราะ () ไม่ใช่ []  
 
                                               // จบรอบ แล้วไปเริ่มใหม่จนถึงชุดข้อมูลสุดท้าย


      var token = ["9T5MHxkdbz7hx92xpuIeTFEghWIKIXZQ40AVpKbGZBG"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
      var options = {
            "method": "post",
            "payload": "message=" + all,        // ให้ข้อมูลที่จะส่งตรงนี้ 
            "headers": {
            "Authorization": "Bearer " + token
            }
            };
      
          UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
          

          Utilities.sleep(2000);    
          Logger.log(all);      // พิมพ์ตัวแปร all ออกมาแสดง
    }  

    SpreadsheetApp.flush();     // ให้เห็นขั้นตอนการทำงาน
 
  }
}


