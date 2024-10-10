declare module 'yencode' {
  export type YencData = {
    yencStart: number
    dataStart: number
    dataEnd: number
    yencEnd: number
    props: {
      begin: {
        part: string
        total: string
        line: string
        size: string
        name: string
      }
      part: {
        begin: string
        end: string
      }
      end: {
        size: string
        part: string
        pcrc32: string
      }
    }
    data: Buffer
    crc32: Buffer
    warnings: {
      code: string
      message: string
    }[]
  }

  export function from_post (data: Buffer): YencData
}
