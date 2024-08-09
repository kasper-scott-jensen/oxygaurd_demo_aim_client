import { readdirSync, statSync, readFile, writeFile } from 'fs'
import { join, extname } from 'path'

/**
 * Recursively read files in a directory and process .svelte files.
 * @param {string} directory - The directory to read.
 */
function readFiles(directory) {
    const files = readdirSync(directory)
    files.forEach((file) => {
        const fullPath = join(directory, file)
        if (statSync(fullPath).isDirectory()) {
            readFiles(fullPath)
        } else if (extname(fullPath) === '.svelte') {
            removeClasses(fullPath)
        }
    })
}

/**
 * Remove classes with dark:, focus:, or active: from a file.
 * @param {string} filePath - The file path.
 */
function removeClasses(filePath) {
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`)
            return
        }

        // Regex to match classes with dark:, focus:, or active:
        const regex = /(\s|^)(\w+:)*(dark|focus|active):[^\s"'<>`]+/g
        const newData = data.replace(regex, '')

        writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`)
            } else {
                console.log(`Processed file: ${filePath}`)
            }
        })
    })
}

// Start reading from the current directory
readFiles('./')
