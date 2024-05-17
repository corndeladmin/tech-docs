const exerciseNum = i => String(i + 1).padStart(3, '0')

export const exercises = new Array(3)
  .fill(null)
  .map((_, i) => ({
    text: `Exercise ${i + 1}`,
    link: `/exercises/${exerciseNum(i)}`
  }))
