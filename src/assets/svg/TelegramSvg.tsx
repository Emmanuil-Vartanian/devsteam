import React from 'react'

export interface SvgProps {
  color: string
}

const TelegramSvg: React.FC<SvgProps> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={color}
      d="M21.265 1.427a2.048 2.048 0 0 0-2.078-.324L1.267 8.338a2.043 2.043 0 0 0 .103 3.818l3.625 1.26 2.02 6.683c.028.089.068.174.12.252.007.012.018.02.026.033a.99.99 0 0 0 .281.265c.095.063.2.109.31.136h.013l.006.004c.067.013.135.02.203.02l.018-.003a.994.994 0 0 0 .301-.052c.023-.008.042-.02.064-.03a.998.998 0 0 0 .205-.114l.152-.13 2.702-2.982 4.03 3.122c.355.276.792.426 1.241.427a2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM8.37 13.735a.994.994 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117-2.699 2.7Zm8.302 5.304-4.763-3.69a1 1 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083A1 1 0 0 0 15.91 6.26L5.745 11.553 2.02 10.19 20 2.999l-3.328 16.04Z"
    />
  </svg>
)

export default TelegramSvg
