import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        message: "invalid input",
      });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://olivier:6FRJMhYPL8TYo7Qj@cluster0.fkbhf9b.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      await client.close();
      return res.status(201).json({
        message: "success message",
        newMessage: newMessage,
      });
    } catch (error) {
      await client.close();
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default handler;
