# Requirements Analysis – Online Food Ordering System

## Functional Requirements
1. ผู้ใช้สามารถสมัครสมาชิกและเข้าสู่ระบบได้
2. ผู้ใช้สามารถเลือกดูร้านอาหารและเมนูอาหารได้
3. ผู้ใช้สามารถสั่งอาหารและยกเลิกคำสั่งซื้อได้ก่อนร้านยืนยัน
4. ผู้ใช้สามารถชำระเงินผ่าน QR Code หรือ Credit Card
5. ผู้ใช้สามารถติดตามสถานะการจัดส่งแบบ Real-time

## Non-Functional Requirements
1. **Performance:** ระบบต้องตอบสนองการสั่งอาหารภายใน 3 วินาที
2. **Availability:** ระบบต้องพร้อมใช้งานไม่น้อยกว่า 99%
3. **Security:** ข้อมูลการชำระเงินต้องถูกเข้ารหัสตามมาตรฐานความปลอดภัย

## Constraints
1. **Technology:** ต้องเป็น Web-based Application
2. **Budget:** ใช้เทคโนโลยี Open-source เป็นหลัก
3. **Time:** พัฒนาเวอร์ชันแรกภายใน 3 เดือน

## Quality Attribute Scenarios

### Scenario 1: Order Peak Time
- Quality Attribute: Performance
- Source: ผู้ใช้จำนวนมาก
- Stimulus: มีการสั่งอาหารพร้อมกัน
- Artifact: Backend System
- Environment: ช่วงเวลาเร่งด่วน
- Response: ระบบยังคงให้บริการได้
- Response Measure: Response time ≤ 5 วินาที

### Scenario 2: Payment Security
- Quality Attribute: Security
- Source: ผู้ใช้
- Stimulus: การชำระเงิน
- Artifact: Payment Module
- Environment: การใช้งานปกติ
- Response: ข้อมูลถูกเข้ารหัส
- Response Measure: ไม่มีข้อมูลรั่วไหล
