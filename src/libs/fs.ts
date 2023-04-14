import { readFile, readdir } from 'fs/promises'

export const fetchFile = async ({
  basePath,
  path,
  extension,
}: {
  basePath: string[]
  path: string[]
  extension?: string
}) => {
  const fullPath = [...basePath, ...path].join('/')

  const fullFilePath = [fullPath, extension].join('.')

  const file = await readFile(fullFilePath, 'utf-8')

  return file
}

export const fetchPaths = async ({
  basePath,
  path,
  extension,
}: {
  basePath: string[]
  path: string[]
  extension?: string
}) => {
  const files = await readdir(
    [process.cwd(), ...basePath, ...path].join('/'),
    'utf-8'
  )

  if (extension) {
    return files
      .filter((file) => file.includes(extension))
      .map((file) => {
        const [slug] = file.split('.') ?? ''

        return [...path, slug]
      })
  }

  return files.map((file) => {
    const [slug] = file.split('.') ?? ''

    return [...path, slug]
  })
}