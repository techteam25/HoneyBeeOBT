import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await req.body;
  let returnVal = "";
  try {
    if (data.page === "/home") {
      returnVal =
        "Welcome to the home page, for specific help otions please got to the page you want help on an dpress the help button";
    } else if (data.page === "/about") {
      returnVal =
        "Welcome to the about page, for specific help otions please got to the page you want help on an dpress the help button";
    } else if (data.page === "/language") {
      returnVal =
        "Welcome to the language page, Select the language you want to work in.";
    } else if (data.page === "/scripture") {
      returnVal = "Welcome to the scripture page.";
    } else if (data.page === "/download") {
      returnVal =
        "Welcome to the download page, please select a template to download.";
    } else if (data.page === "/search") {
      returnVal = "Welcome to the search page, please enter a search term.";
    } else if (data.page === "/registration") {
      returnVal =
        "Welcome to the registration page, please enter your information to register.";
    } else if (data.page === "/folder") {
      returnVal = "Welcome to the folder page, please select a folder to open.";
    } else if (data.page === "/words") {
      returnVal =
        "Welcome to the words page, please select a Word Link to investigate.";
    } else if (data.page === "/demo") {
      returnVal = "Welcome to the demo page, please select a demo to download.";
    } else if (data.page === "/workflow/learn") {
      returnVal =
        "Welcome to the learn page, please watch the attached video to see what it is like in english.";
    } else if (data.page === "/workflow/translate") {
      returnVal =
        "Welcome to the translate page, please translate the text in the box.";
    } else if (data.page === "/workflow/naturalness") {
      returnVal =
        "Welcome to the naturalness page, please select the most natural translation.";
    } else if (data.page === "/workflow/accuracy") {
      returnVal =
        "Welcome to the accuracy page, please select the most accurate translation.";
    } else if (data.page === "/workflow/voice") {
      returnVal = "Welcome to the voice page, please select the best voice.";
    } else if (data.page === "/workflow/finalize") {
      returnVal =
        "Welcome to the finalize page, please finalize the translation.";
    } else if (data.page === "/workflow/review") {
      returnVal = "Welcome to the review page, please review the details.";
    } else {
      returnVal =
        "Sorry, we could not find the page you are looking for, please try again";
    }
  } catch {
    (e: Error) => {
      console.error("Bad news: " + e);
    };
  }
  res.status(200).json({ help: returnVal });
}
