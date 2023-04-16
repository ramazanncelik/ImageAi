import Replicate from "replicate";
export default async function handler(request, response) {
    const { prompt } = request.body;

    if (!prompt) {
        response.status(400).json("No prompt provided")
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });

    const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: prompt };
    const output = await replicate.run(model, { input });
    response.status(200).json(output ? output[0] : "Failed to create the image");
}