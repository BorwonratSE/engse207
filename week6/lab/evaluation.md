# Architecture Evaluation

## Comparison Table

| Criteria | Weight | Monolithic | Weighted | Microservices | Weighted |
|--------|--------|-----------|----------|---------------|----------|
| Performance | 30% | 3 | 0.9 | 5 | 1.5 |
| Scalability | 30% | 2 | 0.6 | 5 | 1.5 |
| Maintainability | 20% | 3 | 0.6 | 4 | 0.8 |
| Cost | 20% | 5 | 1.0 | 3 | 0.6 |
| **Total** | **100%** | | **3.1** | | **4.4** |

## Selected Architecture
**Decision:** Microservices Architecture

## Reasons
1. รองรับการขยายระบบในอนาคตได้ดี
2. รองรับผู้ใช้งานจำนวนมาก
3. แยกความรับผิดชอบของระบบชัดเจน
