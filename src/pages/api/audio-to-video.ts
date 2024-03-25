import { NextApiRequest, NextApiResponse } from 'next'
import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { audioPath } = req.body // Assuming you receive the audio file path

    const outputPath = path.join(process.cwd(), 'public', 'output.mp4') // Output video path

    // Convert audio to video
    ffmpeg()
        .input(audioPath)
        .inputFormat('mp3') // Adjust input format as per your requirement
        .videoCodec('libx264') // Codec for video
        .outputOptions('-pix_fmt yuv420p') // Pixel format
        .output(outputPath)
        .on('end', () => {
            console.log('Conversion finished')
            res.status(200).json({ success: true, videoPath: '/output.mp4' })
        })
        .on('error', (err) => {
            console.error('Error during conversion:', err)
            res.status(500).json({ success: false, error: 'Conversion failed' })
        })
        .run()
}