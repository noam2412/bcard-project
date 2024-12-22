import express, { Request, Response } from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// פונקציות לקריאה וכתיבה של db.json
const dbFilePath = "db.json";
const readDB = (): any => JSON.parse(fs.readFileSync(dbFilePath, "utf-8"));
const writeDB = (data: any): void => fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));

// מסלול POST להוספת מוצר חדש
app.post("/api/products", (req: Request, res: Response): void => {
  try {
    const { name, price, category, description, image, available } = req.body;

    // בדיקה אם כל השדות הנדרשים מלאים
    if (!name || !price || !category || !description || !image) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    const db = readDB();
    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
      category,
      description,
      image,
      available: available ?? true, // ברירת מחדל ל-true אם לא נשלח
    };

    db.products.push(newProduct);
    writeDB(db);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error });
  }
});

// הרצת השרת
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
