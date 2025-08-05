// const mongoose = require("mongoose");
// const { faker } = require("@faker-js/faker"); // ✅ FIXED import
// const InterfaceLog = require("./models/InterfaceLog");
// require("dotenv").config();

// const interfaceNames = [
//   "SF_ECP_EmployeeSync",
//   "PayrollExport",
//   "LeaveBalanceUpdate",
//   "BenefitEnrollmentSync",
//   "PositionDataReplication",
//   "CompensationPlanningExport",
//   "RecruitingDataImport"
// ];

// async function seed() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to DB");

//     await InterfaceLog.deleteMany({});
//     console.log("🧹 Cleared old records");

//     const BATCH_SIZE = 10000;
//     const TOTAL_RECORDS = 500000;

//     for (let i = 0; i < TOTAL_RECORDS / BATCH_SIZE; i++) {
//       const bulk = [];

//       for (let j = 0; j < BATCH_SIZE; j++) {
//         const status = Math.random() > 0.8 ? "failure" : "success"; // 20% failure rate
//         const interfaceName = faker.helpers.arrayElement(interfaceNames); // ✅ .arrayElement
//         const integrationKey = faker.string.uuid(); // ✅ .string.uuid()

//         const message =
//           status === "success"
//             ? `${interfaceName} completed successfully.`
//             : `Error: ${faker.number.int({
//                 min: 400,
//                 max: 503
//               })} ${faker.hacker.verb()} error during ${interfaceName}`;

//         bulk.push({
//           interfaceName,
//           integrationKey,
//           status,
//           message,
//           timestamp: faker.date.recent({ days: 30 }) // ✅ updated to match latest syntax
//         });
//       }

//       await InterfaceLog.insertMany(bulk);
//       console.log(`✅ Inserted ${BATCH_SIZE * (i + 1)} records`);
//     }

//     console.log(`🎉 Seeded ${TOTAL_RECORDS} realistic records`);
//     process.exit();
//   } catch (err) {
//     console.error("❌ Error during seeding:", err);
//     process.exit(1);
//   }
// }

// seed();
