# เอกสารสถาปัตยกรรมระบบ (Architecture Documentation)
Student Management System

---

## C1: Context Diagram

┌───────────────┐
│ ผู้ใช้งาน │
│ (Browser / │
│ Postman) │
└───────┬───────┘
│ HTTP Request
▼
┌────────────────────────────┐
│ ระบบจัดการข้อมูลนักศึกษา │
│ (Node.js + Express API) │
└──────────┬─────────────────┘
│ SQL Query
▼
┌──────────┐
│ SQLite DB│
└──────────┘

yaml
Copy code

**คำอธิบาย:**  
ผู้ใช้งานโต้ตอบกับระบบจัดการข้อมูลนักศึกษาผ่าน HTTP API  
โดยใช้เครื่องมือเช่น Web Browser หรือ Postman  
ระบบจะประมวลผลคำขอและจัดเก็บข้อมูลลงในฐานข้อมูล SQLite

---

## C2: Container Diagram (Layered Architecture)

┌─────────────────────────────────────┐
│ Presentation Layer │
│ ┌───────────────────────────────┐ │
│ │ Routes → Controllers │ │
│ │ - จัดการ HTTP Request │ │
│ │ - ส่ง HTTP Response │ │
│ └───────────────────────────────┘ │
└───────────────┬────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Business Logic Layer │
│ ┌───────────────────────────────┐ │
│ │ Services → Validators │ │
│ │ - กฎทางธุรกิจ │ │
│ │ - ตรวจสอบความถูกต้องของข้อมูล │ │
│ └───────────────────────────────┘ │
└───────────────┬────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Data Access Layer │
│ ┌───────────────────────────────┐ │
│ │ Repositories → Database │ │
│ │ - คำสั่ง SQL │ │
│ │ - CRUD Operations │ │
│ └───────────────────────────────┘ │
└───────────────┬────────────────────┘
│
▼
┌──────────┐
│ SQLite │
└──────────┘

yaml
Copy code

---

## หน้าที่ความรับผิดชอบของแต่ละ Layer

### Presentation Layer
- รับ HTTP request จากผู้ใช้งาน
- ส่ง HTTP response กลับไปยัง client
- ไม่จัดการ business logic หรือการติดต่อฐานข้อมูล

---

### Business Logic Layer
- ตรวจสอบความถูกต้องของข้อมูล (Validation)
- ประมวลผลกฎทางธุรกิจ เช่น:
  - ค่า GPA ต้องอยู่ระหว่าง 0.00 – 4.00
  - นักศึกษาที่มีสถานะ active ไม่สามารถลบได้
  - นักศึกษาที่มีสถานะ withdrawn ไม่สามารถเปลี่ยนสถานะได้
- เป็นตัวกลางประสานงานระหว่าง Presentation และ Data Layer

---

### Data Access Layer
- ติดต่อกับฐานข้อมูล SQLite
- จัดการคำสั่ง SQL และ CRUD operations
- ไม่จัดการ validation หรือกฎทางธุรกิจ

---

## Data Flow (ลำดับการไหลของข้อมูล)

1. ผู้ใช้งานส่ง HTTP request เข้าสู่ระบบ
2. Route ส่ง request ไปยัง Controller
3. Controller เรียกใช้งาน Service ที่เกี่ยวข้อง
4. Service ตรวจสอบ validation และ business rules
5. Service เรียก Repository เพื่อจัดการข้อมูล
6. Repository ติดต่อฐานข้อมูล SQLite
7. ส่งผลลัพธ์กลับไปยัง Service และ Controller
8. Controller ส่ง HTTP response กลับไปยังผู้ใช้งาน

---

## สรุป
การออกแบบระบบด้วย Layered Architecture  
ช่วยแยกความรับผิดชอบของแต่ละส่วนอย่างชัดเจน  
ทำให้ระบบเข้าใจง่าย ดูแลรักษาง่าย และสามารถขยายระบบในอนาคตได้