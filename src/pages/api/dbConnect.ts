import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res :NextApiResponse) {
    const data = req.body;
  try {
    if (!mongoose.connection.readyState) {
      const session = await mongoose
        .connect(`${process.env.DATABASE_ACCESS}`)
        .then(async function () {
          let numbers = mongoose.model("userData");
          const userConnect = await numbers.find().select(`${data.userID}`);
          res.status(200).send(userConnect);
        })
        .catch(function (err: Error) {
          console.log(err);
        });
    } else {
      let numbers = mongoose.model("userData");
      const userConnect2 = await numbers.find().select(`${data.userID}`);
      res.status(200).send(userConnect2);
    }
  } catch (err) {
    console.log(err);
  }
}
