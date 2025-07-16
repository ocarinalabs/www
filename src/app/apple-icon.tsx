import { ImageResponse } from 'next/og'
 
// Apple-touch-icon size (180x180 is recommended)
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 140,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'monospace',
          borderRadius: '20%', // Apple icons typically have rounded corners
        }}
      >
        ⊨
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}