const { Configuration, OpenAIApi } = require("openai");
let apiKey = '';
const configuration = new Configuration({ apiKey });

const openai = new OpenAIApi(configuration);

async function test() {
  // let completion = await openai.listModels();

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "皮卡丘可以使用飛葉快刀嗎",
    // stream: true
    max_tokens: 1024
  });
  console.log(completion.data.choices[0].text);

  // let result = completion.data.split(/\s+data:\s+/g).filter(shard => {
  //   try {
  //     JSON.parse(shard);
  //     return true;
  //   } catch(e) {
  //     return false;
  //   }
  // }).map(shard => {
  //   return JSON.parse(shard).choices[0].text;
  // }).join('');
  // console.log(result);
}

test()