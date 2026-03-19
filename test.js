import dotenv from "dotenv";

dotenv.config();

if (process.env.MESSAGE) {
  console.log("✅ ENV Loaded Successfully");
  process.exit(0);
} else {
  console.log("❌ ENV Not Found");
  process.exit(1);
}
