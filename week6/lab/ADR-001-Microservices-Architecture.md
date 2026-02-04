# ADR-001: Adopt Microservices Architecture

## Context
ระบบ Online Food Ordering ต้องรองรับผู้ใช้จำนวนมาก มีการเติบโตในอนาคต และต้องการความยืดหยุ่นในการพัฒนา

## Decision
เลือกใช้ Microservices Architecture แทน Monolithic Architecture

## Rationale
- รองรับ Scalability สูง
- ลดผลกระทบเมื่อแก้ไขหรือพัฒนาบริการบางส่วน
- เหมาะกับระบบที่มีหลายฟังก์ชันย่อย

## Consequences

### Positive
- ระบบขยายได้ง่าย
- แต่ละบริการพัฒนาและ deploy แยกกันได้

### Negative
- ระบบซับซ้อนขึ้น
- ต้องมีการจัดการ Infrastructure เพิ่มเติม
