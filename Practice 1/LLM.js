import { GoogleGenAI } from "@google/genai";
import readLineSync from "readline-sync";

const ai = new GoogleGenAI({apiKey: "AIzaSyABOHWZM4Cwqdk8UM05ep1kL9g5CfzVbJc"});


const History= []

async function Chatting(userProblem) {
  History.push({
    role:"user",
    parts:[{text: userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History
  });

  History.push({
    role:"model",
    parts:[{text:response.text}]
  })

  console.log("\n");
  console.log(response.text);
}


async function main(){
  const userProblem = readLineSync.question("Ask Me Anything-->"); //readlineSync.question → waits for user input from the terminal.


  await Chatting(userProblem);
  main();
}

main();